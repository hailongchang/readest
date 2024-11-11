import React, { useEffect, useRef, useState } from 'react';

import { TOCItem } from '@/libs/document';
import { useReaderStore } from '@/store/readerStore';
import { findParentPath } from '@/utils/toc';
import { getContentMd5 } from '@/utils/misc';

const createExpanderIcon = (isExpanded: boolean) => {
  return (
    <svg
      viewBox='0 0 8 10'
      width='8'
      height='10'
      className={`transform transition-transform ${isExpanded ? 'rotate-90' : 'rotate-0'}`}
      style={{ transformOrigin: 'center' }}
    >
      <polygon points='0 0, 8 5, 0 10' />
    </svg>
  );
};

const TOCItemView: React.FC<{
  bookKey: string;
  item: TOCItem;
  depth: number;
  expandedItems: string[];
}> = ({ bookKey, item, depth, expandedItems }) => {
  const [isExpanded, setIsExpanded] = useState(expandedItems.includes(item.href || ''));
  const { getView, getProgress } = useReaderStore();
  const progress = getProgress(bookKey);

  const handleToggleExpand = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsExpanded((prev) => !prev);
  };

  const handleClickItem = (event: React.MouseEvent) => {
    event.preventDefault();
    if (item.href) {
      getView(bookKey)?.goTo(item.href);
    }
  };

  const isActive = progress ? progress.tocHref === item.href : false;

  useEffect(() => {
    setIsExpanded(expandedItems.includes(item.href || ''));
  }, [expandedItems, item.href]);

  return (
    <li className='w-full' style={{ paddingTop: '1px' }}>
      <span
        role='treeitem'
        tabIndex={-1}
        onClick={item.href ? handleClickItem : undefined}
        style={{ paddingInlineStart: `${(depth + 1) * 12}px` }}
        aria-expanded={isExpanded ? 'true' : 'false'}
        aria-selected={isActive ? 'true' : 'false'}
        data-href={item.href ? getContentMd5(item.href) : undefined}
        className={`flex w-full cursor-pointer items-center rounded-md py-2 ${
          isActive ? 'bg-gray-300 hover:bg-gray-400' : 'hover:bg-gray-300'
        }`}
      >
        {item.subitems && (
          <span onClick={handleToggleExpand} className='inline-block cursor-pointer'>
            {createExpanderIcon(isExpanded)}
          </span>
        )}
        <span
          className='ml-2 truncate text-ellipsis'
          style={{
            maxWidth: 'calc(100% - 24px)',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {item.label}
        </span>
      </span>
      {item.subitems && isExpanded && (
        <ol role='group'>
          {item.subitems.map((subitem, index) => (
            <TOCItemView
              bookKey={bookKey}
              key={`${index}-${subitem.href}`}
              item={subitem}
              depth={depth + 1}
              expandedItems={expandedItems}
            />
          ))}
        </ol>
      )}
    </li>
  );
};

const TOCView: React.FC<{
  bookKey: string;
  toc: TOCItem[];
}> = ({ bookKey, toc }) => {
  const { sideBarBookKey, getProgress } = useReaderStore();
  const progress = getProgress(bookKey);

  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const viewRef = useRef<HTMLUListElement | null>(null);

  const expandParents = (toc: TOCItem[], href: string) => {
    const parentPath = findParentPath(toc, href).map((item) => item.href);
    setExpandedItems(parentPath.filter(Boolean) as string[]);
  };

  useEffect(() => {
    if (!progress) return;
    const { tocHref: currentHref } = progress;
    const hrefMd5 = currentHref ? getContentMd5(currentHref) : '';
    const currentItem = viewRef.current?.querySelector(`[data-href="${hrefMd5}"]`);
    if (currentItem) {
      const rect = currentItem.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (!isVisible) {
        (currentItem as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      (currentItem as HTMLElement).setAttribute('aria-current', 'page');
    }
    if (currentHref) {
      expandParents(toc, currentHref);
    }
  }, [toc, progress, sideBarBookKey]);

  return (
    <div className='relative'>
      <div className='max-h-[calc(100vh-173px)] overflow-y-auto rounded pt-2'>
        <ul role='tree' ref={viewRef} className='overflow-y-auto px-2'>
          {toc &&
            toc.map((item, index) => (
              <TOCItemView
                bookKey={bookKey}
                key={`${index}-${item.href}`}
                item={item}
                depth={0}
                expandedItems={expandedItems}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TOCView;

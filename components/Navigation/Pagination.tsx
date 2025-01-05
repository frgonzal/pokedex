import Image from 'next/image';

interface PaginationProps {
  actualPage: number;
  maxPage: number;
  onPrevious: () => void;
  onNext: () => void;
}


function Pagination({ actualPage, maxPage, onPrevious, onNext }: PaginationProps) {
  return (
    <div className="flex flex-row items-center justify-between w-full px-10 mt-5">
      {
        (actualPage > 1) && (
          <button 
            onClick={onPrevious}
            className="mr-right"
          >
            <Image
              src="/caret-left-fill.svg" 
              alt="left" 
              width={40}
              height={40}
            />
          </button>

        )
      }
      {
        (actualPage < maxPage) && (
          <button 
            onClick={onNext}
            className="ml-auto"
          >
            <Image
              src="/caret-right-fill.svg" 
              alt="right" 
              width={40}
              height={40}
            />
          </button>
        )
      }
    </div>
  );
}

export default Pagination;
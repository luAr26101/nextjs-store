import { Skeleton } from "@/components/ui/skeleton";

function LoadingTable({ rows = 5 }: { rows?: number }) {
  const tableRows = Array.from({ length: rows }, (_, index) => {
    return (
      <div key={index} className='mb-4'>
        <Skeleton className='h-8 w-full rounded' />
      </div>
    );
  });
  return <>{tableRows}</>;
}

export default LoadingTable;

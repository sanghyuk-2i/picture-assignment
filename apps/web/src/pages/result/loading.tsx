import { Flex, Grid, Skeleton } from '@repo/ui';

import { InfoCard } from '@/components/pictures/InfoCard';

const InfoItemSkeleton = () => {
  return (
    <div className="flex flex-col gap-1">
      <Skeleton className="h-6 w-2/12" />
      <Skeleton className="h-6 w-11/12" />
    </div>
  );
};

const LoadingPage = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-gray-100" />

      <Grid className="h-fit items-center px-5 lg:h-full lg:grid-cols-2 lg:gap-20">
        <div className="my-10">
          <Skeleton className="h-full min-h-[200px] w-full rounded-2xl lg:min-h-[400px]" />
        </div>

        <Flex direction="column" className="gap-3 pb-10 lg:pb-0">
          <Flex direction="column" className="w-full gap-3">
            <InfoCard className="md:grid-cols-2">
              <InfoItemSkeleton />
              <InfoItemSkeleton />
            </InfoCard>

            <InfoCard className="md:grid-cols-2">
              <InfoItemSkeleton />
              <InfoItemSkeleton />
            </InfoCard>

            <InfoCard>
              <InfoItemSkeleton />
              <InfoItemSkeleton />
            </InfoCard>
          </Flex>

          <Skeleton className="h-12 w-full md:mx-auto md:w-[154px]" />
        </Flex>
      </Grid>
    </>
  );
};

export default LoadingPage;

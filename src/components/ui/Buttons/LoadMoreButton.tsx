import { ButtonHTMLAttributes, FC } from 'react'

interface LoadMoreButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasNextPage: boolean | undefined
  fetchNextPage: $FIXME
}

export const LoadMoreButton: FC<LoadMoreButtonProps> = ({
  fetchNextPage,
  hasNextPage,
  ...rest
}) => {
  const onClickLoadMore = () => {
    fetchNextPage && fetchNextPage()
  }

  return (
    <>
      {hasNextPage && (
        <div className='text-center'>
          <button
            className='mt-4 rounded-lg border border-black px-4 py-1 shadow transition-all hover:border-green-800 hover:text-green-800'
            onClick={onClickLoadMore}
            {...rest}>
            Load more
          </button>
        </div>
      )}
    </>
  )
}

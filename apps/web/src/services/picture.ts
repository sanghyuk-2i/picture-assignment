export interface GetPictureInfoParams {
  id: string;
}

export interface GetPictureInfoResponse {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export const getPictureInfo = async (params: GetPictureInfoParams) => {
  const { id } = params;

  const response = await fetch(`/picsum-api/id/${id}/info`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch picture info');
  }

  return response.json() as Promise<GetPictureInfoResponse>;
};

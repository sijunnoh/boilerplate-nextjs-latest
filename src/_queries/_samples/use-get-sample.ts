import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export interface GetSampleResponse {
  item: string[]
}

export const useGetSample = () => {
  const query = useQuery({
    queryKey: ["sample"],
    queryFn: async () => {
      const result = await axios.get<GetSampleResponse>(`/v1/sample`)

      return result.data.item
    },
  })

  return query
}

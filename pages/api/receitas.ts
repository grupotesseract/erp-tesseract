// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { ChartPoint } from "../../types/ChartPoint"

export default function getReceitas(
  req: NextApiRequest,
  res: NextApiResponse<ChartPoint[]>
) {
  res.status(200).json(receitas)
}

const receitas = [
  { date: "01/01/2022", value: 53811 },
  { date: "01/02/2022", value: 56107 },
  { date: "01/03/2022", value: 56575 },
  { date: "01/04/2022", value: 53030 },
  { date: "01/05/2022", value: 52510 },
  { date: "01/06/2022", value: 51835 },
  { date: "01/07/2022", value: 59300 },
  { date: "01/08/2022", value: 53897 },
  { date: "01/09/2022", value: 54689 },
  { date: "01/10/2022", value: 56847 },
  { date: "01/11/2022", value: 56991 },
  { date: "01/12/2022", value: 59559 },
  { date: "01/01/2023", value: 52131 },
  { date: "01/02/2023", value: 54096 },
  { date: "01/03/2023", value: 57176 },
  { date: "01/04/2023", value: 57735 },
  { date: "01/05/2023", value: 57373 },
  { date: "01/06/2023", value: 55215 },
  { date: "01/07/2023", value: 57283 },
  { date: "01/08/2023", value: 50804 },
  { date: "01/09/2023", value: 56877 },
  { date: "01/10/2023", value: 50413 },
  { date: "01/11/2023", value: 53503 },
  { date: "01/12/2023", value: 53496 },
  { date: "01/01/2024", value: 58536 },
  { date: "01/02/2024", value: 52212 },
  { date: "01/03/2024", value: 59082 },
  { date: "01/04/2024", value: 54055 },
  { date: "01/05/2024", value: 56314 },
  { date: "01/06/2024", value: 53602 },
  { date: "01/07/2024", value: 51360 },
  { date: "01/08/2024", value: 57446 },
  { date: "01/09/2024", value: 51083 },
  { date: "01/10/2024", value: 53473 },
  { date: "01/11/2024", value: 50806 },
  { date: "01/12/2024", value: 55306 },
  { date: "01/01/2025", value: 50771 },
  { date: "01/02/2025", value: 54768 }
]

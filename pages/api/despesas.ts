// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { ChartPoint } from "../../types/ChartPoint"

export default function getDespesas(
  req: NextApiRequest,
  res: NextApiResponse<ChartPoint[]>
) {
  res.status(200).json(despesas)
}

const despesas = [
  { date: "01/01/2022", value: 46042 },
  { date: "01/02/2022", value: 66740 },
  { date: "01/03/2022", value: 54526 },
  { date: "01/04/2022", value: 51112 },
  { date: "01/05/2022", value: 58472 },
  { date: "01/06/2022", value: 64502 },
  { date: "01/07/2022", value: 63458 },
  { date: "01/08/2022", value: 44850 },
  { date: "01/09/2022", value: 60371 },
  { date: "01/10/2022", value: 45331 },
  { date: "01/11/2022", value: 52201 },
  { date: "01/12/2022", value: 53530 },
  { date: "01/01/2023", value: 58009 },
  { date: "01/02/2023", value: 43657 },
  { date: "01/03/2023", value: 44117 },
  { date: "01/04/2023", value: 67708 },
  { date: "01/05/2023", value: 57838 },
  { date: "01/06/2023", value: 51416 },
  { date: "01/07/2023", value: 52026 },
  { date: "01/08/2023", value: 68128 },
  { date: "01/09/2023", value: 44574 },
  { date: "01/10/2023", value: 64765 },
  { date: "01/11/2023", value: 60690 },
  { date: "01/12/2023", value: 65067 },
  { date: "01/01/2024", value: 50992 },
  { date: "01/02/2024", value: 68558 },
  { date: "01/03/2024", value: 43768 },
  { date: "01/04/2024", value: 46312 },
  { date: "01/05/2024", value: 66875 },
  { date: "01/06/2024", value: 64923 },
  { date: "01/07/2024", value: 66090 },
  { date: "01/08/2024", value: 65969 },
  { date: "01/09/2024", value: 42280 },
  { date: "01/10/2024", value: 54226 },
  { date: "01/11/2024", value: 55269 },
  { date: "01/12/2024", value: 62484 },
  { date: "01/01/2025", value: 66368 },
  { date: "01/02/2025", value: 54654 }
]

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { ChartPoint } from "../../types/ChartPoint"

export default function getSaldo(
  req: NextApiRequest,
  res: NextApiResponse<ChartPoint[]>
) {
  res.status(200).json(saldo)
}

const saldo = [
  { date: "01/01/2022", value: 77769 },
  { date: "01/02/2022", value: 67136 },
  { date: "01/03/2022", value: 69185 },
  { date: "01/04/2022", value: 71103 },
  { date: "01/05/2022", value: 65141 },
  { date: "01/06/2022", value: 52474 },
  { date: "01/07/2022", value: 48316 },
  { date: "01/08/2022", value: 57363 },
  { date: "01/09/2022", value: 51681 },
  { date: "01/10/2022", value: 63197 },
  { date: "01/11/2022", value: 67987 },
  { date: "01/12/2022", value: 74016 },
  { date: "01/01/2023", value: 68138 },
  { date: "01/02/2023", value: 78577 },
  { date: "01/03/2023", value: 91636 },
  { date: "01/04/2023", value: 81663 },
  { date: "01/05/2023", value: 81198 },
  { date: "01/06/2023", value: 84997 },
  { date: "01/07/2023", value: 90254 },
  { date: "01/08/2023", value: 72930 },
  { date: "01/09/2023", value: 85233 },
  { date: "01/10/2023", value: 70881 },
  { date: "01/11/2023", value: 63694 },
  { date: "01/12/2023", value: 52123 },
  { date: "01/01/2024", value: 59667 },
  { date: "01/02/2024", value: 43321 },
  { date: "01/03/2024", value: 58635 }
  /*   { date: "01/04/2024", value: 66378 },
  { date: "01/05/2024", value: 55817 },
  { date: "01/06/2024", value: 44496 },
  { date: "01/07/2024", value: 29766 },
  { date: "01/08/2024", value: 21243 },
  { date: "01/09/2024", value: 30046 },
  { date: "01/10/2024", value: 29293 },
  { date: "01/11/2024", value: 24830 },
  { date: "01/12/2024", value: 17652 },
  { date: "01/01/2025", value: 2055 },
  { date: "01/02/2025", value: 2169 } */
]

import { FormatTableHeader } from "../utils/formatter";

export const columns = ["avatar","id","name","email"].map(header=>FormatTableHeader(header,250));
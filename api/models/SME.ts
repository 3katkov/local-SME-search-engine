import { ObjectId } from "mongodb";

export default class SME {
  constructor(
    public CompanyName: String,
    public CompanyNumber: Number,
    public CompanyCategory: String,
    public CompanyStatus: String,
    public CountryOfOrigin: String,
    public IncorporationDate: String,
    public URI: String
  ) {}
}

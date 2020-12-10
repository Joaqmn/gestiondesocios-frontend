import Partners from "../../utils/assoc_partners";

export const getPartners = async () => {
  const partners = new Partners();
  const data = await assoc_partners.getPartners();
  return data;
};

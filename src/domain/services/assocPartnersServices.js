import Partners from "../../utils/assoc_partners";

export const getPartners = async () => {
  const partners = new Partners();
  const data = await partners.getPartners();
  return data;
};

export const getPartner = async (id) => {
  const partners = new Partners();
  const data = await partners.getPartner(id);
  return data;
};

export const insertPartner = async (id) => {
  const partners = new Partners();
  const data = await partners.insertPartner(id);
  return data;
};

export const deletePartner = async (id) => {
  const partners = new Partners();
  const data = await partners.deletePartner(id);
  return data;
};

export const updatePartner = async (id) => {
  const partners = new Partners();
  const data = await partners.updatePartner(id);
  return data;
};

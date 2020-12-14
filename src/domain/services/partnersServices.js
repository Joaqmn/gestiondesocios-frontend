import Partners from "../../utils/partners";

export const getPartners = async () => {
  const partners = new Partners();
  const data = await partners.getAll();
  return data;
};

export const getPartner = async (id) => {
  const partners = new Partners();
  const data = await partners.get(id);
  return data;
};

export const insertPartner = async (id, body) => {
  const partners = new Partners();
  const data = await partners.insert(id, body);
  return data;
};

export const deletePartner = async (id) => {
  const partners = new Partners();
  const data = await partners.delete(id);
  return data;
};

export const updatePartner = async (id, body) => {
  const partners = new Partners();
  const data = await partners.update(id, body);
  return data;
};

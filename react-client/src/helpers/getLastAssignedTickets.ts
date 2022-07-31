export const getLastAssignedTickets = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/tickets/last-assigned`);

  const data = await res.json();

  return data.lastTickets;
};

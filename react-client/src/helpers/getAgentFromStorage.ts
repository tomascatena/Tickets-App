type Agent = {
  name: string;
  desk: string | number;
};

export const getAgentFromStorage = () => {
  const agentLS = localStorage.getItem('agent');

  let agent: Agent | null = null;
  if (agentLS) {
    agent = JSON.parse(agentLS);
  }

  let hasPersistedAgent = false;
  if (agent?.name && agent?.desk) {
    hasPersistedAgent = true;
  }

  return {
    agent,
    hasPersistedAgent,
  };
};

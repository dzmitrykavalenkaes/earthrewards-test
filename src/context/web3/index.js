const Web3 = require('web3');
import React, { useState, useEffect, createContext, useContext } from 'react';
import ABI from './ABI.json';

const testnet = 'https://kovan.infura.io/v3/19c0ad07661b4e0684fae3097f224b2e';
const tokenAddress = '0x8EB6D2CE2Db73Fb058dd9e7CB7961F67c42fEfa1';

const Web3Context = createContext();

const Web3Provider = props => {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const web3Instance = new Web3(new Web3.providers.HttpProvider(testnet));
    const contractInstance = new web3Instance.eth.Contract(ABI, tokenAddress);

    setContract(contractInstance);
  }, []);

  return <Web3Context.Provider value={{ value: contract }} {...props} />;
};

const useContract = () => {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error('useContract must be used within a Web3Provider');
  }
  return context;
};

export { Web3Provider, useContract };

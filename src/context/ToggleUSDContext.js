import { use, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserCurrency, updateUserCurrencyValue } from "../redux/user/userSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ToggleUSDContext = createContext();

export const ToggleUSDProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { currency } = useSelector((state) => state.user);
  

  // ✅ Get userId from Redux or localStorage
  const auth = JSON.parse(localStorage.getItem("opinionUser"));
  // const userId = id || auth?.id;

  // ✅ Local state for toggle button
  const [isUSDChecked, setIsUSDChecked] = useState(false);

  // ✅ Fetch user currency on first load
  useEffect(() => {
    dispatch(fetchUserCurrency(auth?.id));
  }, []);

  // ✅ Sync Redux currency with local state when it changes
  useEffect(() => {
    setIsUSDChecked(currency === "Usd");
    // console.log("currency", currency);
    
  }, [currency]);

  // ✅ Handle toggle button change
  const handleUDSChange = (event) => {
    const newCurrency = event.target.checked ? "Usd" : "Coin";
    setIsUSDChecked(event.target.checked);

    dispatch(
      updateUserCurrencyValue({ userId: auth?.id, currency: newCurrency })
    );
  };


  return (
    <ToggleUSDContext.Provider value={{ isUSDChecked, handleUDSChange}}>
      {children}
    </ToggleUSDContext.Provider>
  );
};

export const useToggleUSD = () => {
  return useContext(ToggleUSDContext);
};

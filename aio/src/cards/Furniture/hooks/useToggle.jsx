import { useState } from "react";

const useToggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleIsToggled = () => setIsToggled(!isToggled);

  return { isToggled, handleIsToggled };
};

export default useToggle;

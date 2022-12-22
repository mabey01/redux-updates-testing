import { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, incrementByAmount } from "../demo.slice";

export function useTriggerMultipleActions() {
  const dispatch = useDispatch();
  const [isProcessing, setIsProcessing] = useState<
    "pristine" | "processing" | "done"
  >("pristine");

  const callback = () => {
    setIsProcessing("processing");

    setTimeout(() => {
      dispatch(increment());
      dispatch(increment());
      dispatch(increment());
      dispatch(incrementByAmount(10));

      setIsProcessing("done");
    }, 10);
  };

  return {
    isProcessing,
    trigger: callback,
  };
}

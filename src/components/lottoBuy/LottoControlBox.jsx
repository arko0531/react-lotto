import React from "react";

import { useSelector } from "react-redux";

import LottoWinningTime from "./LottoControl/LottoWinningTime";
import LottoControl from "./LottoControl/LottoControl";

const LottoControlBox = () => {
  const isShowLottoControl = useSelector(
    (state) => state.ui.isShowLottoControl
  );

  return (
    <>
      {isShowLottoControl && (
        <>
          <LottoWinningTime />

          <LottoControl />
        </>
      )}
    </>
  );
};

export default LottoControlBox;

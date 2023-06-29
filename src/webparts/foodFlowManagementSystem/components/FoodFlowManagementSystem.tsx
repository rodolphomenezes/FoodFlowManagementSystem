import * as React from 'react';
import { IFoodFlowManagementSystemProps } from './IFoodFlowManagementSystemProps';
import { Ffms } from './FFMS/ffms';
import { SubHeader } from './subHeader/SubHeader';
import styles from './FoodFlowManagementSystem.module.scss';
import { MenuUserCol1 } from './bodyComps/menuUserCol1/MenuUserCol1';

export default function FoodFlowManagementSystem(param: IFoodFlowManagementSystemProps) {
  return (
    <div>
      <Ffms />
      <SubHeader />
      <div className={styles.containerColunas}>
        <MenuUserCol1 />
      </div>
    </div>
  )
}

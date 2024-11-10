import { cn } from "~/utils";

import { TCElectronicLogo } from "./parts";
import styles from "./style.module.scss";

type BasePedalProps = React.HTMLAttributes<HTMLDivElement>;

const BasePedal = ({ className }: BasePedalProps) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={cn(styles.pedal)}>
        {/* <Output />
        <Input />
        <Chassis>
          <PitchLabel />
          <Screen />
          <OutputLabel />
          <InputLabel />
          <PoyltuneLogo />
          <Button />
          <TCElectronicsLogo />
        </Chassis> */}
        <TCElectronicLogo />
      </div>
    </div>
  );
};

const Pedal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.glow} />
      <BasePedal />
      <BasePedal className={styles.reflection} />
    </div>
  );
};

export { Pedal };

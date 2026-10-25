type Particle = {position: [number, number, number]; speed: number};

type ModelIconProps = {
  model: {
    name: string;
    modelPath: string;
    scale: number;
    rotation: number[];
  };
};

type FormInputs = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = "idle" | "success" | "error";

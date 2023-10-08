import { Controller, Control, UseFormRegister } from "react-hook-form";
import { LinkHeader } from "../LinkHeader";
import { Dropdown } from "@/app/_components/ui/Dropdown";
import { TextField } from "@/app/_components/ui/TextField";
import type { Link } from "@/app/_stores/link.store";
import type { FormValues } from "../../FormLinks";

type Props = {
  index: number;
  link: Link;

  removeLink: () => void;
  register: UseFormRegister<FormValues>;
  control: Control<FormValues, "links">;
};

export const LinksContent = (props: Props) => {
  const { index, link, removeLink, register, control } = props;

  return (
    <div className="flex flex-col gap-3 bg-primary rounded-xl p-5">
      <LinkHeader index={index} removeLink={removeLink} />
      <Controller
        control={control}
        name={`links.${index}.platform`}
        render={({ field: { onChange } }) => (
          <Dropdown onChange={onChange} link={link} index={index} />
        )}
      />
      <TextField
        labelText="Link"
        iconUrl="/icon-links-header.svg"
        placeholder="e.g. https://www.github.com/"
        name={`links.${index}.url`}
        register={register}
        defaultValue={link.url}
      />
    </div>
  );
};

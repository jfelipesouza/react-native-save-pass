export type PasswordItemProps = {
  index: number;
  item: string;
};

export type SectionHeaderComponentProps = {
  title: string;
};

type PasswordsSectionDataType = string;
type PasswordsSectionType = {title: string; data: PasswordsSectionDataType[]};

export type PasswordsSectionProps = {sections: PasswordsSectionType[]};

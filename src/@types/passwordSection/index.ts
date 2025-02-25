export type PasswordItemProps = {
  index: number;
  item: PasswordsSectionDataType;
};

export type SectionHeaderComponentProps = {
  title: string;
};

type PasswordsSectionDataType = {id: string; name: string; password: string};
type PasswordsSectionType = {title: string; data: PasswordsSectionDataType[]};

export type PasswordsSectionProps = {sections: PasswordsSectionType[]};

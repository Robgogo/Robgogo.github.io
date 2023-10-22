export function SectionHeaderText(props: { children: any }) {
  const { children } = props;
  return <h4 className="pb-5 text-l sm:text-xl font-semibold">{children}</h4>;
}

export function SummaryText(props: { children: any }) {
  const { children } = props;
  return <h5 className="pb-5 text-m sm:text-l text-gray-500">{children}</h5>;
}

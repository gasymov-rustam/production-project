import { Flex, FlexProps } from '../Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HorizontalStack = (props: HStackProps) => <Flex direction="row" {...props} />;

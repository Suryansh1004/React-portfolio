import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { StoryContainer } from '../../../.storybook/StoryContainer';
import SegmentedControl, { SegmentedControlOption } from 'components/SegmentedControl';

export default {
  title: 'SegmentedControl',
  decorators: [withKnobs],
};

function DemoSegmentedControl() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <SegmentedControl currentIndex={currentIndex} onChange={setCurrentIndex}>
      <SegmentedControlOption>Option 1</SegmentedControlOption>
      <SegmentedControlOption>Option 2</SegmentedControlOption>
      <SegmentedControlOption>Option 3</SegmentedControlOption>
    </SegmentedControl>
  );
}

export const segmentedControl = () => (
  <StoryContainer padding={32} gutter={32}>
    <DemoSegmentedControl />
  </StoryContainer>
);

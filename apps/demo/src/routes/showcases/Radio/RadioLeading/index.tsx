import { component$, useSignal } from '@builder.io/qwik';
import { SfRadio } from 'qwik-storefront-ui';

const radioOptions = [
  {
    label: 'Label',
    value: 'value-1',
    name: 'radio-1',
  },
  {
    label: 'Label 2',
    value: 'value-2',
    name: 'radio-1',
  },
];

export default component$(() => {
  const checkedStateSignal = useSignal('');
  return (
    <>
      <div class="-mt-4">
        {radioOptions.map(({ label, value, name }) => (
          <label key={value} class="flex items-center mt-4 cursor-pointer">
            <SfRadio
              name={name}
              value={value}
              checked={checkedStateSignal.value === value}
              onChange$={(event) => {
                checkedStateSignal.value = event.target.value;
              }}
            />
            <span class="ml-2 text-base font-normal leading-6 font-body">
              {label}
            </span>
          </label>
        ))}
      </div>
      <div class="flex justify-between mt-2">
        <p class="text-xs text-neutral-500">Help text</p>
      </div>
    </>
  );
});

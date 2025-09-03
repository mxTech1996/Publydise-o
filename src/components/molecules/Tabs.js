import { map } from 'lodash';

const Tabs = ({ items, active, onChange }) => {
  return (
    <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 mb-4'>
      <ul className='flex flex-wrap -mb-px'>
        {map(items, ({ Icon, text }, i) => (
          <li
            onClick={() => onChange(i)}
            className={`flex items-center cursor-pointer mr-2 last-of-type:mr-0 p-4 border-b-2 rounded-t-lg ${active === i
              ? 'text-primary  border-primary active'
              : 'border-transparent hover:text-gray-600 hover:border-gray-300'
              }`}
          >
            {Icon && <Icon className='mr-3' />} {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;

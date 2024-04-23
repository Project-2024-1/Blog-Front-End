import clsx from 'clsx';

// eslint-disable-next-line react/prop-types
const TableListData = ({ data = [], columnsConfig = [], renderRowValue = () => {} }) => {
  console.log('🚀 ~ TableListData ~ renderRowValue:', renderRowValue);
  console.log('🚀 ~ TableListData ~ columnsConfig:', columnsConfig);
  console.log('🚀 ~ TableListData ~ data:', data);
  return (
    <>
      <div className="overflow-auto border rounded-lg border-slate-400">
        <table className="w-full ">
          <thead>
            <tr className="border-b">
              {columnsConfig?.map((c, k) => (
                <th
                  className="text-[10px] font-semibold p-[24px_24px_23px] text-left text-slate-400 uppercase"
                  key={`th_key_${k}`}
                >
                  {c}
                </th>
              ))}
              <th className="text-[10px] font-semibold p-[24px_24px_23px] text-slate-400 uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {!data ? (
              <tr>noData</tr>
            ) : (
              data?.map((candidate, index) => (
                <tr
                  key={candidate.id}
                  className={clsx('border-b text-[13px] text-N900 font-medium', {
                    'bg-slate-400': index % 2 === 0,
                    'bg-white': index % 2 !== 0,
                  })}
                >
                  {columnsConfig?.map((c, k) => (
                    <td className="p-[24px_24px_23px] text-left max-w-[150px] break-words" key={`th_key_${k}`}>
                      {renderRowValue(c, candidate)}
                    </td>
                  ))}
                  <th className="text-[10px] font-semibold p-[24px_24px_23px] text-slate-400 uppercase">Action</th>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {!data?.length ? <p className="text-center text-red-500">noData</p> : ''}
    </>
  );
};

export default TableListData;

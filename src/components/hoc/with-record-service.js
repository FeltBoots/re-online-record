import React from 'react';
import { RecordServiceConsumer } from "../record-context";

const withRecordService = () =>  (Wrapped) => {
  return (props) => {
    return (
      <RecordServiceConsumer>
        {
          (recordService) => {
            return (<Wrapped {...props}
                             recordService={recordService}/>);
          }
        }
      </RecordServiceConsumer>
    );
  }
};

export default withRecordService;

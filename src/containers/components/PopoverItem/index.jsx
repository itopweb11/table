import React from 'react';
import {UncontrolledPopover, PopoverHeader, PopoverBody} from 'reactstrap';

const PopoverItem = ({value, index, parentData, columnTitle}) => {

    return (
        <td>
            <span id={`Popover-${index}`}>
                {value}
            </span>
            <UncontrolledPopover
                className="custom__popover"
                innerClassName="custom__popover_inner"
                placement="right"
                target={`Popover-${index}`}
                trigger="legacy"
            >
                <PopoverHeader>
                    Поставить оценку
                </PopoverHeader>
                <PopoverBody>
                    <div className="custom__popover_item">
                        <span>Студент</span>
                        <span>{parentData.fio}</span>
                    </div>
                    <div className="custom__popover_item">
                        <span>{columnTitle}</span>
                        <span>{value}</span>
                    </div>
                </PopoverBody>
            </UncontrolledPopover>
        </td>
    );
}

export default PopoverItem;

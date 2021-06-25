import React, { useState, useEffect } from 'react';
import { Tag, Input, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

enum Direction {
    tags= '父级传过来的tag',
        inputVisible= '是否点击+NewTag',
        inputValue= '新增tag值',
        editInputIndex= '编辑input的index',
        editInputValue= '编辑input的值',
}
export default function TagGroup(props:any) {
    const [dataTag, setDataTag] = useState(props.tags.tags)
    const [dataType, setDataType] = useState(props.tags.type)
    const [closable, setClosable] = useState(true)
    const [editInputValue, setEditInputValue] = useState("")
    const [editInputIndex, setEditInputIndex] = useState(-1)
    const [inputVisible, setInputVisible] = useState(false)
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
      setDataTag(props.tags.tags)
      setDataType(props.tags.type)
        if(dataType===2){
      setClosable(false)
  }else{
      setClosable(true)
  }
}, []);
    //删除
    const handleClose = (removedTag: any) => {
        const tags = dataTag.filter((tag:string) => tag !== removedTag);
        props.tags.tagChange(tags,dataType,removedTag)
    };

    const showInput = () => {
        setInputVisible(true)
    };

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value)
    };
    //添加
    const handleInputConfirm = () => {
        let tags = dataTag;
        if (inputValue && dataTag.indexOf(inputValue) === -1) {
            setDataTag(tags.push(inputValue))
        }

        props.tags.tagChange(tags,dataType)
        setDataTag(tags)
        setInputVisible(false)
        setInputValue("")
    };

    const handleEditInputChange = (e: any) => {
        setEditInputValue(e.target.value)
    };
    const saveInputRef = (input: any) => {
        if (input != null) {
            input.focus()
        }
    }
    //点击标签事件--运用在历史标签上
    const tagClick = (e:any) =>{
        console.log(e,dataType)
        props.tags.tagChange(e,dataType)
    }
    
        return (
            <>
                {dataTag && dataTag.map((tag:string, index:number) => {
                    if (editInputIndex === index) {
                        return (
                            <Input
                                key={tag}
                                size="small"
                                className="tag-input"
                                value={editInputValue}
                                onChange={handleEditInputChange}
                            />
                        );
                    }

                    const isLongTag = tag.length > 20;

                    const tagElem = (
                        <Tag
                            className="edit-tag"
                            key={tag}
                            closable={closable}
                            onClose={() => handleClose(tag)}
                        >
                            <span
                                onDoubleClick={e => {
                                    if (index !== 0) {
                                        setEditInputIndex(index);setEditInputValue(tag)
                                        e.preventDefault();
                                    }
                                }}
                                onClick={(e)=>tagClick(tag)}
                            >
                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                            </span>
                        </Tag>
                    );

                    return isLongTag ? (
                        <Tooltip title={tag} key={tag}>
                            {tagElem}
                        </Tooltip>
                    ) : (
                            tagElem
                        );
                })}
                {dataTag && dataType===0 && dataTag.length<=0 ?
                <p style={{margin:0,textAlign:"center",fontWeight:"bold"}}>暂无</p>
                :
                ''
    }
                {dataType ===1 &&
                <div style={{display:"inline-block"}}>
                {inputVisible ? 
                    <Input
                        ref={saveInputRef}
                        type="text"
                        size="small"
                        className="tag-input"
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputConfirm}
                        onPressEnter={handleInputConfirm}
                    />
                :
                    <Tag className="site-tag-plus" onClick={showInput}>
                        <PlusOutlined /> New Tag
                    </Tag>
                }
                </div>
            }
                
            </>
        );
}
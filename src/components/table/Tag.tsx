import React from 'react';
import { Tag, Input, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface Props {
    tags:{
    tags:Array<string>,
    type:number,
    tagChange:any
    }
}
enum Direction {
    tags= '父级传过来的tag',
        inputVisible= '是否点击+NewTag',
        inputValue= '新增tag值',
        editInputIndex= '编辑input的index',
        editInputValue= '编辑input的值',
}
export default class TagGroup extends React.Component<Props> {
    state = {
        tags: this.props.tags.tags,
        type:this.props.tags.type,
        closable:true,
        inputVisible: false,
        inputValue: '',
        editInputIndex: -1,
        editInputValue: '',
    };
    //删除
    handleClose = (removedTag: any) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        console.log(this.state.type);
        this.setState({ tags });
        this.props.tags.tagChange(tags,this.state.type,removedTag)
    };

    showInput = () => {
        this.setState({ inputVisible: true });
    };

    handleInputChange = (e: any) => {
        this.setState({ inputValue: e.target.value });
    };
    //添加
    handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { tags } = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        console.log(this.state.type);
        this.props.tags.tagChange(tags,this.state.type)
        this.setState({
            tags:tags,
            inputVisible: false,
            inputValue: '',
        });
    };

    handleEditInputChange = (e: any) => {
        this.setState({ editInputValue: e.target.value });
    };
    saveInputRef = (input: any) => {
        if (input != null) {
            input.focus()
        }
    }
    //点击标签事件--运用在历史标签上
    tagClick = (tag:string,type:number) =>{
        console.log(tag,type)
        this.props.tags.tagChange(tag,type)
    }
    componentDidMount() {
        if(this.state.type===2){
            this.setState({ closable: false });
        }else{
            this.setState({ closable: true });
        }
      }
    render() {
        const { tags, type, closable, inputVisible, inputValue, editInputIndex, editInputValue } = this.state;
        return (
            <>
                {tags.length>0 && tags.map((tag, index) => {
                    if (editInputIndex === index) {
                        return (
                            <Input
                                key={tag}
                                size="small"
                                className="tag-input"
                                value={editInputValue}
                                onChange={this.handleEditInputChange}
                            />
                        );
                    }

                    const isLongTag = tag.length > 20;

                    const tagElem = (
                        <Tag
                            className="edit-tag"
                            key={tag}
                            closable={closable}
                            onClose={() => this.handleClose(tag)}
                        >
                            <span
                                onDoubleClick={e => {
                                    if (index !== 0) {
                                        this.setState({ editInputIndex: index, editInputValue: tag }, () => {
                                        });
                                        e.preventDefault();
                                    }
                                }}
                                onClick={(e)=>this.tagClick(tag,type)}
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
                {type===0 && tags.length<=0 ?
                <p style={{margin:0,textAlign:"center",fontWeight:"bold"}}>暂无</p>
                :
                ''
    }
                {type ===1 &&
                <div style={{display:"inline-block"}}>
                {inputVisible ? 
                    <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        className="tag-input"
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                    />
                :
                    <Tag className="site-tag-plus" onClick={this.showInput}>
                        <PlusOutlined /> New Tag
                    </Tag>
                }
                </div>
            }
                
            </>
        );
    }
}
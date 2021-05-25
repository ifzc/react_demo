export default function ListHelp() {
    return(
        <table cellSpacing={0}width="643">
	    <tbody>
	        <tr className="firstRow">
	            <td width="76" valign="middle">状态</td>
	            <td width="567" valign="middle">说明</td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">未指派</td>
	            <td width="567" valign="middle">
	                    服务器存在网站后门文件，未生成任务指派到具体负责人。建议进行系统设置，出现问题自动指派。
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">已指派</td>
	            <td width="567" valign="middle">
	                    服务器存在相关问题，已经生成任务指派到具体负责人。
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">处理中</td>
	            <td width="567" valign="middle">
	                    问题负责人已经开始处理相关问题。若处理后验证失败，则问题继续回到处理中状态。
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">验证中</td>
	            <td width="567" valign="middle">
	                    问题处理后，引擎验证问题是否已处理成功。
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">已忽略</td>
	            <td width="567" valign="middle">
	                    问题被忽略后，系统不再向您提示该问题的告警信息。
	            </td>
	        </tr>
	        <tr>
	            <td width="76" valign="middle">已修复</td>
	            <td width="567" valign="middle">
	                    存在的问题已被修复成功。
	            </td>
	        </tr>
	    </tbody>
	</table>
    )
}
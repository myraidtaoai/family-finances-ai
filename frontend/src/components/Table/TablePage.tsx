export default function TablePage() {
    return (
        <div id="table-page">
            <div className="page-header">
                <h1 className="text-2xl font-bold text-gray-800">业务数据总览</h1>
                <p className="text-gray-600">Q3季度各部门销售业绩与完成率统计</p>
            </div>


            <div className="card">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <input type="text" placeholder="搜索..." className="px-4 py-2 rounded-lg border" style={{ width: 256 }} />
                        <button className="secondary-btn">筛选数据</button>
                    </div>
                    <button className="btn">添加记录</button>
                </div>

                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>产品名称</th>
                                <th>负责人</th>
                                <th>所属部门</th>
                                <th>季度目标(万)</th>
                                <th>实际完成(万)</th>
                                <th>完成率</th>
                                <th>状态</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10001</td>
                                <td>旗舰手机X系列</td>
                                <td>张明</td>
                                <td>电子产品部</td>
                                <td>350.0</td>
                                <td>428.7</td>
                                <td>122.5%</td>
                                <td><div className="status-cell status-active">超额完成</div></td>
                            </tr>
                            <tr>
                                <td>10002</td>
                                <td>智能手表Pro</td>
                                <td>李华</td>
                                <td>可穿戴设备部</td>
                                <td>180.0</td>
                                <td>165.3</td>
                                <td>91.8%</td>
                                <td><div className="status-cell">进行中</div></td>
                            </tr>
                            <tr>
                                <td>10003</td>
                                <td>无线耳机系列</td>
                                <td>王强</td>
                                <td>音频设备部</td>
                                <td>220.0</td>
                                <td>245.6</td>
                                <td>111.6%</td>
                                <td><div className="status-cell status-active">超额完成</div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="pagination">
                    <div className="page-btn">‹</div>
                    <div className="page-btn active">1</div>
                    <div className="page-btn">2</div>
                    <div className="page-btn">3</div>
                    <div className="page-btn">›</div>
                </div>
            </div>
        </div>
    );
}
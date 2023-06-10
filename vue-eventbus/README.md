## 组件交互
1. props
2. 自定义事件$emit
3. 同级之间传递数据
    - 同父同子
    - eventbus
        - 优点：无论组件之间存在什么样的关系，都可以传递数据
        - 缺点：在传递数据的时候，需要增加全局的key，key容易冲突
        - 实现方式
            - 全局eventbus（常见事件方式）
            - 局部eventbus
4. Vuex
5. 自上而下
    - provide  inject
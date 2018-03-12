
### Angular表单
表单一方面接收用户输入的数据，另一方面基于事件驱动处理用户点击，输入文本值、打开链接等操作。

**接受用户输入**
```
<form action="">
    <div class="row">
        <label for="username">用户名</label>
        <input type="text" name="username">
    </div>
    <div class="row">
        <label for="email">邮箱</label>
        <input type="text" name="email">
    </div>
</form>
```

**事件驱动**
```
<button (click)="onClickMe()">Click me!</button>
```

### 不同类型表单
![Angular Form Types](https://images2018.cnblogs.com/blog/59618/201803/59618-20180312210853103-1399128546.png)

### 参考链接
[Angular Forms官方文档](https://angular.io/guide/user-input)


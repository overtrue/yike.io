<template>
  <div class="page-threads-show">
    <div class="row">
      <div class="col-md-9">
        <article class="box">
          <header class="thread-header d-flex justify-content-between align-items-center">
            <user-card></user-card>
            <div class="thread-actions">
              <button type="button" class="btn btn-icon btn-ghost no-border text-20" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <more-icon></more-icon>
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                <button class="dropdown-item" type="button">Action</button>
                <button class="dropdown-item" type="button">Another action</button>
                <button class="dropdown-item" type="button">Something else here</button>
              </div>
            </div>
          </header>
          <div class="thread-content mt-3 text-gray-40 text-16">
            <h2 class="mb-3">微信小程序分享到朋友圈之曲线救国</h2>
            <p>Trait 是从 PHP 5.4 加入的一种细粒度代码复用的语法。以下是官方手册对 Trait 的描述：</p>

            <p>Trait 是为类似 PHP 的单继承语言而准备的一种代码复用机制。Trait 为了减少单继承语言的限制，使开发人员能够自由地在不同层次结构内独立的类中复用 method。Trait 和 Class 组合的语义定义了一种减少复杂性的方式，避免传统多继承和 Mixin 类相关典型问题。</p>

            <p>Trait 和 Class 相似，但仅仅旨在用细粒度和一致的方式来组合功能。 无法通过 trait 自身来实例化。它为传统继承增加了水平特性的组合；也就是说，应用的几个 Class 之间不需要继承。</p>
            <p>
              <img src="https://source.unsplash.com/random/800x400" class="img-fluid" alt="">
            </p>
            <p>上面的这个例子中，“可卖性” 便是部分商品的一个特性，也可以理解为商品的一个归类。你也许会说，我也可以再添加一个 Goods 类来完成上面的例子啊，Goods 继承 Product，再让所有可卖的商品继承于 Goods 类，把价格属性与方法写到 Goods 里，同样可以代码复用啊。的确，这没啥问题。但是你会发现：你有多个需要区别的特性时，由于 PHP 只有单继承的原因，你不得不组合很多个基类出来，将他们层叠，最终得到的树状结构是很复杂的。这也是 Trait 所带来的优势：随意组合，代码清晰。</p>

            <p>其实还有很多例子，比如可飞行的，那么把飞行这个特性所具有的属性（如：高度，距离）与方法（如：起飞，降落）放到一个 trait 就是一个合理的拆分。</p>
          </div>
        </article>
      </div>
      <div class="col-md-3">
        <div class="box box-flush mb-2">
          <img src="https://source.unsplash.com/random/400x300" class="img-fluid" alt="" />

          <div class="text-center p-3">
            <div class="btn btn-primary">点击查看详情</div>
          </div>
        </div>
        <hot-tags></hot-tags>
      </div>
    </div>
  </div>
</template>

<script>
  import MoreIcon from "@icons/dots-horizontal"
  import UserCard from "@components/UserCard"
  import HotTags from "@components/HotTags"

  export default {
    components: {UserCard, HotTags, MoreIcon}
  }
</script>

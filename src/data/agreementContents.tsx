import React from 'react';

// 用户服务协议正文 —— 适配「明序性格测试」
export const UserAgreementContent: React.FC = () => (
  <div className="space-y-6 text-xs text-slate-300 leading-relaxed">
    <h1 className="text-xl font-bold text-sky-400 text-center mb-2">用户服务协议</h1>
    <p className="text-center text-slate-500 mb-6">更新日期：2026 年 8 月 20 日</p>

    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100 border-b border-white/10 pb-2">
        1. 协议的接受
      </h2>
      <p>欢迎使用「明序性格测试」应用（以下简称「本应用」）。</p>
      <p>
        本协议是您与<strong className="text-slate-100">光年跃迁（温州）科技有限公司</strong>（以下简称「我们」）之间关于使用本应用的法律协议。
      </p>
      <p>通过下载、安装或使用本应用，您表示同意接受本协议的全部条款和条件。如您不同意本协议的任何条款，请勿安装或使用本应用。</p>
    </section>

    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100 border-b border-white/10 pb-2">
        2. 服务内容
      </h2>
      <p>本应用为纯前端离线运行的性格测评工具，提供以下服务：</p>
      <ul className="list-disc pl-6 space-y-1.5 text-slate-400">
        <li>MBTI 经典 16 型人格测评（60 题五点量表）</li>
        <li>SBTI 序型性格测评（48 题四点量表，明序自研体系）</li>
        <li>性格结果雷达图、维度百分比、核心解读与多维适配建议</li>
        <li>答题进度本地续答、测评历史档案与解读收藏</li>
        <li>犹豫度分析、性格海报卡片本地生成</li>
      </ul>
    </section>

    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100 border-b border-white/10 pb-2">
        3. 离线运行与数据归属
      </h2>
      <p>
        本应用<strong className="text-slate-100">不内置任何后台服务器</strong>，全程在您的设备本地完成计算与存储，使用过程中不会向我们的服务器或任何第三方发起业务数据上报请求。
      </p>
      <p>
        您的所有答题记录、测评结果、犹豫度分析、收藏解读及偏好设置均仅保存于您当前设备的浏览器 localStorage 中，数据归属权归您本人所有。更换设备、卸载应用或清空浏览器缓存将导致本地记录被清除。
      </p>
    </section>

    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100 border-b border-white/10 pb-2">
        4. 用户义务
      </h2>
      <p>作为本应用的用户，您同意：</p>
      <ul className="list-disc pl-6 space-y-1.5 text-slate-400">
        <li>遵守本协议的所有条款及相关法律法规</li>
        <li>不使用本应用进行任何非法、侵权或损害他人利益的活动</li>
        <li>不通过逆向、反编译、暴力破解等手段干扰本应用的正常运行或窃取源码</li>
        <li>妥善保管您的设备，防止他人未授权访问您的本地测评记录</li>
        <li>理解本应用测评结果仅供自我探索与成长参考，不作为医疗、心理诊断、招聘、婚恋等重大决策依据</li>
      </ul>
    </section>

    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100 border-b border-white/10 pb-2">
        5. 知识产权
      </h2>
      <p>
        本应用的所有内容，包括但不限于 SBTI 序型体系、性格档案文案、题目设计、视觉美术、交互逻辑与软件代码，均受中华人民共和国知识产权法律保护，著作权归<strong className="text-slate-100">光年跃迁（温州）科技有限公司</strong>所有。
      </p>
      <p>未经我们书面许可，您不得复制、修改、分发、出租、出售或商业使用本应用的任何内容，亦不得将本应用用于二次开发或竞品训练。</p>
    </section>

    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100 border-b border-white/10 pb-2">
        6. 免责声明
      </h2>
      <p>本应用按「原样」提供，我们不对本应用的适销性、特定用途适用性或不侵权性作任何明示或默示的保证。</p>
      <p>在法律允许的最大范围内，我们不保证：</p>
      <ul className="list-disc pl-6 space-y-1.5 text-slate-400">
        <li>本应用将完全符合您的全部使用要求</li>
        <li>本应用将无中断、及时、安全或绝对无错误地运行</li>
        <li>本应用的测评结果绝对准确、可靠，且适用于所有具体决策场景</li>
        <li>因设备系统版本、浏览器兼容性、本地存储限制等原因造成的任何数据丢失</li>
      </ul>
      <p>您因使用本应用所产生的任何直接或间接损失，我们不承担赔偿责任。</p>
    </section>

    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100 border-b border-white/10 pb-2">
        7. 协议终止
      </h2>
      <p>您可随时停止使用本应用，并通过卸载应用或清空浏览器缓存的方式终止本协议。</p>
      <p>如我们发现您违反本协议约定，我们有权随时限制或终止您对本应用的使用资格，并追究相应法律责任。</p>
    </section>

    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100 border-b border-white/10 pb-2">
        8. 协议更新
      </h2>
      <p>我们可能根据法律法规变化、业务调整或技术发展，适时修订本协议。修订后的协议将在本应用内显著位置公示，自公示之日起生效。如您在修订后继续使用本应用，即视为您接受修订后的协议；如您不同意修订内容，请停止使用本应用。</p>
    </section>

    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100 border-b border-white/10 pb-2">
        9. 适用法律与争议解决
      </h2>
      <p>本协议受中华人民共和国法律管辖并据此解释。</p>
      <p>任何因本协议或使用本应用产生的争议，双方应首先通过友好协商解决；协商不成的，应提交至<strong className="text-slate-100">温州市</strong>有管辖权的人民法院诉讼解决。</p>
    </section>
  </div>
);

// 隐私政策正文 —— 适配「明序性格测试」纯本地化、零收集零上报的实际行为
export const PrivacyPolicyContent: React.FC = () => (
  <div className="space-y-6 text-xs text-slate-300 leading-relaxed">
    <h1 className="text-xl font-bold text-sky-400 text-center mb-2">🔒 隐私政策</h1>
    <p className="text-center text-slate-500 mb-6">
      <strong>生效日期</strong>：2026 年 8 月 20 日
    </p>

    <div className="bg-emerald-500/10 border-l-4 border-emerald-500 p-4 rounded-r-xl mb-2">
      <p className="text-emerald-200">
        欢迎使用「明序性格测试」（以下简称「本应用」）。本应用由
        <strong className="text-emerald-100">光年跃迁（温州）科技有限公司</strong>
        （以下简称「我们」）开发并运营。我们深知个人信息对您的重要性，将严格遵守《中华人民共和国个人信息保护法》等相关法律法规，保护您的个人信息安全。
      </p>
    </div>

    <p>
      本隐私政策旨在说明我们如何收集、使用、存储和保护您在使用本应用过程中产生的数据，以及您对这些数据所享有的权利。
      <strong className="text-slate-100">请您在使用本应用前仔细阅读并充分理解本政策的全部内容，尤其是加粗的条款。</strong>
      如您对本政策有任何疑问、意见或建议，可通过本政策末尾提供的联系方式与我们联系。
    </p>

    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100 border-b border-white/10 pb-2">
        一、我们收集的信息
      </h2>
      <p>在您使用本应用的过程中，我们收集信息的基本原则是「最小必要」与「100% 本地化」：</p>
      <ol className="list-decimal pl-6 space-y-2 text-slate-400">
        <li>
          <strong className="text-slate-100">测评数据</strong>：您在使用本应用过程中产生的
          <strong className="text-slate-100">答题记录、性格测评结果、犹豫度分析记录、收藏解读与系统偏好设置</strong>
          等内容。这些数据是本应用核心功能的产出物，用于向您提供测评报告、历史归档与解读收藏服务。
        </li>
        <li>
          <strong className="text-slate-100">不收集的设备信息</strong>：本应用<strong className="text-slate-100">不收集</strong>
          您的设备型号、操作系统版本、设备唯一标识符（如 IMEI / Android ID / IDFA）、地理位置、IP 地址、通讯录、相册、麦克风或摄像头数据。
        </li>
        <li>
          <strong className="text-slate-100">不接入第三方 SDK</strong>：本应用<strong className="text-slate-100">不集成</strong>
          任何第三方统计、广告、推送、登录或分享 SDK，亦不包含任何埋点监测代码，因此不会向任何第三方共享您的信息。
        </li>
      </ol>
    </section>

    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100 border-b border-white/10 pb-2">
        二、我们如何使用收集的信息
      </h2>
      <p>我们仅在以下合法、正当、必要的范围内使用您在本地产生的数据：</p>
      <ol className="list-decimal pl-6 space-y-2 text-slate-400">
        <li>
          <strong className="text-slate-100">提供核心服务</strong>：使用您的答题数据完成 MBTI 与 SBTI 维度计算、性格类型判定、雷达图绘制与适配建议生成，将结果反馈给您本人。
        </li>
        <li>
          <strong className="text-slate-100">提供续答与归档</strong>：将您的答题进度、测评历史与收藏解读保存在本地，支持您在中途退出后 7 天内继续答题，并可随时查阅过往测评档案。
        </li>
        <li>
          <strong className="text-slate-100">优化使用体验</strong>：根据您在系统设置中主动开启的偏好（按键音效、触觉反馈），提供个性化的交互反馈，所有偏好配置仅存于本地。
        </li>
      </ol>
      <p>
        <strong className="text-slate-100">我们承诺，绝不将您的测评数据用于商业画像、广告定向、用户行为追踪或对外披露。</strong>
      </p>
    </section>

    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100 border-b border-white/10 pb-2">
        三、我们如何共享、转让和公开披露信息
      </h2>
      <p>我们郑重承诺，本应用为纯前端离线运行，不会主动向任何第三方共享、转让或公开披露您的信息。仅在以下极少数情形下，我们才可能对外提供必要信息：</p>
      <ol className="list-decimal pl-6 space-y-2 text-slate-400">
        <li>
          <strong className="text-slate-100">法定情形</strong>：根据法律法规的规定，或行政、司法机关依法定程序要求我们披露的，我们可能向有关部门披露与您相关的信息。
        </li>
        <li>
          <strong className="text-slate-100">获得明确同意</strong>：在获得您的明确书面同意后，我们才会向第三方共享您的个人信息。
        </li>
        <li>
          <strong className="text-slate-100">应用内主动分享</strong>：您在测评结果页主动点击「生成性格海报卡片」并由您本人将海报保存或转发给他人，由此产生的信息流转由您自主控制，我们不参与、不存储。
        </li>
      </ol>
    </section>

    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100 border-b border-white/10 pb-2">
        四、我们如何存储和保护信息
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-slate-400">
        <li>
          <strong className="text-slate-100">存储位置</strong>：您的所有数据均存储于<strong className="text-slate-100">您当前使用设备的浏览器 localStorage</strong>
          中，<strong className="text-slate-100">不离开设备、不进入网络</strong>。本应用不设服务器端数据库，亦不进行任何形式的云端同步。
        </li>
        <li>
          <strong className="text-slate-100">存储期限</strong>：测评历史档案与收藏解读将长期保留于您的设备，直至您主动删除或清空浏览器缓存；
          未完成的答题进度将在最后一次更新后 <strong className="text-slate-100">7 天</strong>自动失效。
        </li>
        <li>
          <strong className="text-slate-100">安全措施</strong>：由于数据完全位于您本人设备，本应用的安全性主要依赖于您对设备的妥善保管。
          建议您为设备设置锁屏密码、不安装来历不明的应用、不将设备借给陌生人使用，以保护本地测评记录不被他人查阅。
        </li>
        <li>
          <strong className="text-slate-100">跨设备迁移</strong>：因数据不进入云端，本应用<strong className="text-slate-100">不支持</strong>
          跨设备数据迁移。如需在新设备上使用，您需重新进行测评。
        </li>
      </ol>
    </section>

    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100 border-b border-white/10 pb-2">
        五、您的权利
      </h2>
      <p>根据相关法律法规，您对您的数据享有以下完整控制权：</p>
      <ol className="list-decimal pl-6 space-y-2 text-slate-400">
        <li>
          <strong className="text-slate-100">访问权</strong>：您可随时在本应用的「历史记录」与「我的档案」中查看您的测评结果与收藏解读。
        </li>
        <li>
          <strong className="text-slate-100">更正权</strong>：您可通过重新进行测评覆盖旧记录，或重新收藏解读来替换原收藏。
        </li>
        <li>
          <strong className="text-slate-100">删除权</strong>：您可在历史记录中单独删除某条测评档案，或在系统设置中一键清空所有本地数据。
        </li>
        <li>
          <strong className="text-slate-100">数据可携带权</strong>：您可通过应用内的「生成性格卡片」功能将测评结果以图片形式导出。
        </li>
        <li>
          <strong className="text-slate-100">撤回同意权</strong>：您可随时通过系统设置中的「一键清空所有本地数据」撤回您对本政策的同意，撤回后我们将无法恢复您的数据。
        </li>
      </ol>
    </section>

    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100 border-b border-white/10 pb-2">
        六、未成年人保护
      </h2>
      <p>
        我们非常重视对未成年人个人信息的保护。如您是未满 14 周岁的未成年人，请在监护人的指导下仔细阅读本政策，并征得监护人的同意后使用本应用。
        如监护人事后发现我们在未获其可验证同意的情况下收集了未成年人的数据，可联系我们删除，我们将立即配合处理。
      </p>
    </section>

    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100 border-b border-white/10 pb-2">
        七、本政策的更新
      </h2>
      <p>我们可能根据法律法规的更新、业务的调整或技术的发展，适时对本隐私政策进行修订。修订后的政策将在本应用内显著位置公示，并在生效前通过合理方式通知您。如您继续使用本应用，即表示您同意接受修订后的政策；如您不同意修订内容，请停止使用并卸载本应用。</p>
    </section>

    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100 border-b border-white/10 pb-2">
        八、联系我们
      </h2>
      <p>如您对本隐私政策有任何疑问、意见或建议，或需要行使您的相关权利，请通过以下方式与我们联系：</p>
      <div className="bg-slate-950/60 border border-white/10 rounded-xl p-4">
        <p>
          <strong className="text-slate-100">运营主体</strong>：光年跃迁（温州）科技有限公司
        </p>
        <p>
          <strong className="text-slate-100">电子邮箱</strong>：Jp112022@163.com
        </p>
      </div>
    </section>

    <div className="pt-6 border-t border-white/10 text-center space-y-1">
      <p className="text-slate-500">感谢您使用明序性格测试</p>
      <p className="text-slate-500">我们致力于为您提供安全、隐私、纯粹的性格自测体验。</p>
      <p className="text-[11px] text-slate-600 pt-2">© 2026 光年跃迁（温州）科技有限公司 版权所有</p>
    </div>
  </div>
);

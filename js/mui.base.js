var basUrl = 'http://kypai.gotoip1.com/';
//var basUrl = 'http://192.168.2.11:81/';
function copyFromClip() {
	var value = '';
	switch(plus.os.name) {
		case "Android":
			// Android平台: plus.android.*
			var Context = plus.android.importClass("android.content.Context");
	        var main = plus.android.runtimeMainActivity();
	        var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
	        value = plus.android.invoke(clip,"getText");
			break;
		case "iOS":
			// iOS平台: plus.ios.*
			var UIPasteboard  = plus.ios.importClass("UIPasteboard");
			var generalPasteboard = UIPasteboard.generalPasteboard();
			// 获取文本内容:
			value = generalPasteboard.valueForPasteboardType("public.utf8-plain-text");
			break;
		default:
			break;
	}
	return value;
}
function copyToClip(uid) {
	switch(plus.os.name) {
		case "Android":
			// Android平台: plus.android.*
			var Context = plus.android.importClass("android.content.Context");
			var main = plus.android.runtimeMainActivity();
			var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
			plus.android.invoke(clip, "setText", uid);
			break;
		case "iOS":
			// iOS平台: plus.ios.*
			var UIPasteboard  = plus.ios.importClass("UIPasteboard");
			var generalPasteboard = UIPasteboard.generalPasteboard();
			// 设置文本内容:
			generalPasteboard.setValueforPasteboardType(uid, "public.utf8-plain-text");
			break;
		default:
			break;
	}
}
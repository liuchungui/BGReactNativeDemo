//
//  ReactNativeController.m
//  BGReactNativeDemo
//
//  Created by user on 16/1/16.
//  Copyright © 2016年 liuchungui. All rights reserved.
//

#import "ReactNativeController.h"
#import "RCTRootView.h"

@implementation ReactNativeController
- (void)loadView {
    RCTRootView *view = [[RCTRootView alloc] initWithBundleURL:[NSURL URLWithString:self.jsCodeUrl] moduleName:self.moduleName initialProperties:nil launchOptions:nil];
    self.view = view;
}

- (void)viewDidLoad {
    [self.navigationController setNavigationBarHidden:YES animated:NO];
}
@end

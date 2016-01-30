//
//  TableViewController.m
//  BGReactNativeDemo
//
//  Created by user on 16/1/16.
//  Copyright © 2016年 liuchungui. All rights reserved.
//

#import "TableViewController.h"
#import "RCTRootView.h"
#import "ReactNativeController.h"

@interface TableViewController ()
@property (nonatomic, strong) NSArray *dataArray;
@end
@implementation TableViewController

- (void)viewDidLoad {
    self.edgesForExtendedLayout = UIRectEdgeNone;
    self.extendedLayoutIncludesOpaqueBars = NO;
    self.automaticallyAdjustsScrollViewInsets = NO;
    
    self.title = @"ReactNativeDemo";
    self.dataArray = @[@"text", @"listView", @"NavigatorDemo", @"BGReactNativeDemo"];
    [self.tableView registerClass:[UITableViewCell class] forCellReuseIdentifier:NSStringFromClass([UITableViewCell class])];
    [self.tableView reloadData];
}

#pragma mark - UITableViewDataSource method
- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView{
    return 1;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section{
    return self.dataArray.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath{
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:NSStringFromClass([UITableViewCell class])];
    cell.textLabel.text = self.dataArray[indexPath.row];
    return cell;
}

#pragma mark - UITableViewDelegate method
- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath{
    return 45;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath{
    //your code
    NSString *moduleName = @"";
    NSString *jsCodeUrl = @"";
    switch (indexPath.row) {
        case 0: {
            moduleName = @"TextDemo";
            jsCodeUrl = @"http://localhost:8081/TextDemo.bundle?platform=ios&dev=true";
        }
            break;
        case 1: {
            moduleName = @"ListViewDemo";
            jsCodeUrl = @"http://localhost:8081/ListViewDemo.bundle?platform=ios&dev=true";
        }
            break;
        case 2: {
            moduleName = @"NavigatorDemo";
            jsCodeUrl = @"http://localhost:8081/NavigatorDemo.bundle?platform=ios&dev=true";
            break;
        }
        case 3: {
            moduleName = @"BGReactNativeDemo";
            jsCodeUrl = @"http://localhost:8081/BGReactNativeDemo.bundle?platform=ios&dev=true";
            break;
        }
            
        default:
            break;
    }
    ReactNativeController *ctrl = [[ReactNativeController alloc] init];
    ctrl.jsCodeUrl = jsCodeUrl;
    ctrl.moduleName = moduleName;
    [self.navigationController pushViewController:ctrl animated:YES];
}
@end

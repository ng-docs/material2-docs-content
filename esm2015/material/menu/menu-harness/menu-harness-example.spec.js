import { __awaiter } from "tslib";
import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatMenuHarness } from '@angular/material/menu/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MatMenuModule } from '@angular/material/menu';
import { MenuHarnessExample } from './menu-harness-example';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
describe('MenuHarnessExample', () => {
    let fixture;
    let loader;
    beforeAll(() => {
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [MatMenuModule, NoopAnimationsModule],
            declarations: [MenuHarnessExample]
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MenuHarnessExample);
        fixture.detectChanges();
        loader = TestbedHarnessEnvironment.loader(fixture);
        inject([OverlayContainer], () => { })();
    });
    it('should load all menu harnesses', () => __awaiter(void 0, void 0, void 0, function* () {
        const menues = yield loader.getAllHarnesses(MatMenuHarness);
        expect(menues.length).toBe(2);
    }));
    it('should get disabled state', () => __awaiter(void 0, void 0, void 0, function* () {
        const [enabledMenu, disabledMenu] = yield loader.getAllHarnesses(MatMenuHarness);
        expect(yield enabledMenu.isDisabled()).toBe(false);
        expect(yield disabledMenu.isDisabled()).toBe(true);
    }));
    it('should get menu text', () => __awaiter(void 0, void 0, void 0, function* () {
        const [firstMenu, secondMenu] = yield loader.getAllHarnesses(MatMenuHarness);
        expect(yield firstMenu.getTriggerText()).toBe('Settings');
        expect(yield secondMenu.getTriggerText()).toBe('Disabled menu');
    }));
    it('should open and close', () => __awaiter(void 0, void 0, void 0, function* () {
        const menu = yield loader.getHarness(MatMenuHarness.with({ triggerText: 'Settings' }));
        expect(yield menu.isOpen()).toBe(false);
        yield menu.open();
        expect(yield menu.isOpen()).toBe(true);
        yield menu.close();
        expect(yield menu.isOpen()).toBe(false);
    }));
    it('should get all items', () => __awaiter(void 0, void 0, void 0, function* () {
        const menu = yield loader.getHarness(MatMenuHarness.with({ triggerText: 'Settings' }));
        yield menu.open();
        expect((yield menu.getItems()).length).toBe(2);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1oYXJuZXNzLWV4YW1wbGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1oYXJuZXNzL21lbnUtaGFybmVzcy1leGFtcGxlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxPQUFPLEVBQW9CLFlBQVksRUFBRSxNQUFNLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFFOUQsT0FBTyxFQUFDLDJCQUEyQixFQUFFLDZCQUE2QixFQUFDLE1BQzVELDJDQUEyQyxDQUFDO0FBQ25ELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUUxRSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO0lBQ2xDLElBQUksT0FBNkMsQ0FBQztJQUNsRCxJQUFJLE1BQXFCLENBQUM7SUFFMUIsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQywyQkFBMkIsRUFBRSw2QkFBNkIsRUFBRSxDQUFDLENBQUM7SUFDNUYsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQ1IsWUFBWSxDQUFDLEdBQUcsRUFBRTtRQUNoQixPQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDO1lBQzlDLFlB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Q0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Rlc3RCZWQsIENvbXBvbmVudEZpeHR1cmUsIHdhaXRGb3JBc3luYywgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHtUZXN0YmVkSGFybmVzc0Vudmlyb25tZW50fSBmcm9tICdAYW5ndWxhci9jZGsvdGVzdGluZy90ZXN0YmVkJztcbmltcG9ydCB7TWF0TWVudUhhcm5lc3N9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUvdGVzdGluZyc7XG5pbXBvcnQge0hhcm5lc3NMb2FkZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXN0aW5nJztcbmltcG9ydCB7QnJvd3NlckR5bmFtaWNUZXN0aW5nTW9kdWxlLCBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljVGVzdGluZ31cbiAgZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3RpbmcnO1xuaW1wb3J0IHtNYXRNZW51TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7TWVudUhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL21lbnUtaGFybmVzcy1leGFtcGxlJztcbmltcG9ydCB7T3ZlcmxheUNvbnRhaW5lcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtOb29wQW5pbWF0aW9uc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuZGVzY3JpYmUoJ01lbnVIYXJuZXNzRXhhbXBsZScsICgpID0+IHtcbiAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8TWVudUhhcm5lc3NFeGFtcGxlPjtcbiAgbGV0IGxvYWRlcjogSGFybmVzc0xvYWRlcjtcblxuICBiZWZvcmVBbGwoKCkgPT4ge1xuICAgIFRlc3RCZWQuaW5pdFRlc3RFbnZpcm9ubWVudChCcm93c2VyRHluYW1pY1Rlc3RpbmdNb2R1bGUsIHBsYXRmb3JtQnJvd3NlckR5bmFtaWNUZXN0aW5nKCkpO1xuICB9KTtcblxuICBiZWZvcmVFYWNoKFxuICAgIHdhaXRGb3JBc3luYygoKSA9PiB7XG4gICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgICBpbXBvcnRzOiBbTWF0TWVudU1vZHVsZSwgTm9vcEFuaW1hdGlvbnNNb2R1bGVdLFxuICAgICAgICBkZWNsYXJhdGlvbnM6IFtNZW51SGFybmVzc0V4YW1wbGVdXG4gICAgICB9KS5jb21waWxlQ29tcG9uZW50cygpO1xuICAgIH0pKTtcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoTWVudUhhcm5lc3NFeGFtcGxlKTtcbiAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgICBsb2FkZXIgPSBUZXN0YmVkSGFybmVzc0Vudmlyb25tZW50LmxvYWRlcihmaXh0dXJlKTtcbiAgICBpbmplY3QoW092ZXJsYXlDb250YWluZXJdLCAoKSA9PiB7fSkoKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBsb2FkIGFsbCBtZW51IGhhcm5lc3NlcycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtZW51ZXMgPSBhd2FpdCBsb2FkZXIuZ2V0QWxsSGFybmVzc2VzKE1hdE1lbnVIYXJuZXNzKTtcbiAgICBleHBlY3QobWVudWVzLmxlbmd0aCkudG9CZSgyKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBnZXQgZGlzYWJsZWQgc3RhdGUnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgW2VuYWJsZWRNZW51LCBkaXNhYmxlZE1lbnVdID0gYXdhaXQgbG9hZGVyLmdldEFsbEhhcm5lc3NlcyhNYXRNZW51SGFybmVzcyk7XG4gICAgZXhwZWN0KGF3YWl0IGVuYWJsZWRNZW51LmlzRGlzYWJsZWQoKSkudG9CZShmYWxzZSk7XG4gICAgZXhwZWN0KGF3YWl0IGRpc2FibGVkTWVudS5pc0Rpc2FibGVkKCkpLnRvQmUodHJ1ZSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgZ2V0IG1lbnUgdGV4dCcsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBbZmlyc3RNZW51LCBzZWNvbmRNZW51XSA9IGF3YWl0IGxvYWRlci5nZXRBbGxIYXJuZXNzZXMoTWF0TWVudUhhcm5lc3MpO1xuICAgIGV4cGVjdChhd2FpdCBmaXJzdE1lbnUuZ2V0VHJpZ2dlclRleHQoKSkudG9CZSgnU2V0dGluZ3MnKTtcbiAgICBleHBlY3QoYXdhaXQgc2Vjb25kTWVudS5nZXRUcmlnZ2VyVGV4dCgpKS50b0JlKCdEaXNhYmxlZCBtZW51Jyk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgb3BlbiBhbmQgY2xvc2UnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbWVudSA9IGF3YWl0IGxvYWRlci5nZXRIYXJuZXNzKE1hdE1lbnVIYXJuZXNzLndpdGgoe3RyaWdnZXJUZXh0OiAnU2V0dGluZ3MnfSkpO1xuICAgIGV4cGVjdChhd2FpdCBtZW51LmlzT3BlbigpKS50b0JlKGZhbHNlKTtcbiAgICBhd2FpdCBtZW51Lm9wZW4oKTtcbiAgICBleHBlY3QoYXdhaXQgbWVudS5pc09wZW4oKSkudG9CZSh0cnVlKTtcbiAgICBhd2FpdCBtZW51LmNsb3NlKCk7XG4gICAgZXhwZWN0KGF3YWl0IG1lbnUuaXNPcGVuKCkpLnRvQmUoZmFsc2UpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGdldCBhbGwgaXRlbXMnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbWVudSA9IGF3YWl0IGxvYWRlci5nZXRIYXJuZXNzKE1hdE1lbnVIYXJuZXNzLndpdGgoe3RyaWdnZXJUZXh0OiAnU2V0dGluZ3MnfSkpO1xuICAgIGF3YWl0IG1lbnUub3BlbigpO1xuICAgIGV4cGVjdCgoYXdhaXQgbWVudS5nZXRJdGVtcygpKS5sZW5ndGgpLnRvQmUoMik7XG4gIH0pO1xufSk7XG4iXX0=
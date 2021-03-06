import { __awaiter } from "tslib";
import { TestBed, waitForAsync } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatPaginatorHarness } from '@angular/material/paginator/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorHarnessExample } from './paginator-harness-example';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
describe('PaginatorHarnessExample', () => {
    let fixture;
    let loader;
    let instance;
    beforeAll(() => {
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [MatPaginatorModule, NoopAnimationsModule],
            declarations: [PaginatorHarnessExample]
        }).compileComponents();
        fixture = TestBed.createComponent(PaginatorHarnessExample);
        fixture.detectChanges();
        loader = TestbedHarnessEnvironment.loader(fixture);
        instance = fixture.componentInstance;
    }));
    it('should load all paginator harnesses', () => __awaiter(void 0, void 0, void 0, function* () {
        const paginators = yield loader.getAllHarnesses(MatPaginatorHarness);
        expect(paginators.length).toBe(1);
    }));
    it('should be able to navigate between pages', () => __awaiter(void 0, void 0, void 0, function* () {
        const paginator = yield loader.getHarness(MatPaginatorHarness);
        expect(instance.pageIndex).toBe(0);
        yield paginator.goToNextPage();
        expect(instance.pageIndex).toBe(1);
        yield paginator.goToPreviousPage();
        expect(instance.pageIndex).toBe(0);
    }));
    it('should be able to go to the last page', () => __awaiter(void 0, void 0, void 0, function* () {
        const paginator = yield loader.getHarness(MatPaginatorHarness);
        expect(instance.pageIndex).toBe(0);
        yield paginator.goToLastPage();
        expect(instance.pageIndex).toBe(49);
    }));
    it('should be able to set the page size', () => __awaiter(void 0, void 0, void 0, function* () {
        const paginator = yield loader.getHarness(MatPaginatorHarness);
        expect(instance.pageSize).toBe(10);
        yield paginator.setPageSize(25);
        expect(instance.pageSize).toBe(25);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWhhcm5lc3MtZXhhbXBsZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1oYXJuZXNzL3BhZ2luYXRvci1oYXJuZXNzLWV4YW1wbGUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLE9BQU8sRUFBb0IsWUFBWSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDOUUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFFeEUsT0FBTyxFQUFDLDJCQUEyQixFQUFFLDZCQUE2QixFQUFDLE1BQzVELDJDQUEyQyxDQUFDO0FBQ25ELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBRTFFLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUU7SUFDdkMsSUFBSSxPQUFrRCxDQUFDO0lBQ3ZELElBQUksTUFBcUIsQ0FBQztJQUMxQixJQUFJLFFBQWlDLENBQUM7SUFFdEMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQywyQkFBMkIsRUFBRSw2QkFBNkIsRUFBRSxDQUFDLENBQUM7SUFDNUYsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQ1IsWUFBWSxDQUFDLEdBQUcsRUFBRTtRQUNoQixPQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUM7WUFDbkQsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDeEMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdkIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzRCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsTUFBTSxHQUFHLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCxRQUFRLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFFRixFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBUyxFQUFFO1FBQ25ELE1BQU0sVUFBVSxHQUFHLE1BQU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMENBQTBDLEVBQUUsR0FBUyxFQUFFO1FBQ3hELE1BQU0sU0FBUyxHQUFHLE1BQU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRS9ELE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRSxHQUFTLEVBQUU7UUFDckQsTUFBTSxTQUFTLEdBQUcsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFL0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFTLEVBQUU7UUFDbkQsTUFBTSxTQUFTLEdBQUcsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFL0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsTUFBTSxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGVzdEJlZCwgQ29tcG9uZW50Rml4dHVyZSwgd2FpdEZvckFzeW5jfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHtUZXN0YmVkSGFybmVzc0Vudmlyb25tZW50fSBmcm9tICdAYW5ndWxhci9jZGsvdGVzdGluZy90ZXN0YmVkJztcbmltcG9ydCB7TWF0UGFnaW5hdG9ySGFybmVzc30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yL3Rlc3RpbmcnO1xuaW1wb3J0IHtIYXJuZXNzTG9hZGVyfSBmcm9tICdAYW5ndWxhci9jZGsvdGVzdGluZyc7XG5pbXBvcnQge0Jyb3dzZXJEeW5hbWljVGVzdGluZ01vZHVsZSwgcGxhdGZvcm1Ccm93c2VyRHluYW1pY1Rlc3Rpbmd9XG4gIGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy90ZXN0aW5nJztcbmltcG9ydCB7TWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHtQYWdpbmF0b3JIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9wYWdpbmF0b3ItaGFybmVzcy1leGFtcGxlJztcbmltcG9ydCB7Tm9vcEFuaW1hdGlvbnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5cbmRlc2NyaWJlKCdQYWdpbmF0b3JIYXJuZXNzRXhhbXBsZScsICgpID0+IHtcbiAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8UGFnaW5hdG9ySGFybmVzc0V4YW1wbGU+O1xuICBsZXQgbG9hZGVyOiBIYXJuZXNzTG9hZGVyO1xuICBsZXQgaW5zdGFuY2U6IFBhZ2luYXRvckhhcm5lc3NFeGFtcGxlO1xuXG4gIGJlZm9yZUFsbCgoKSA9PiB7XG4gICAgVGVzdEJlZC5pbml0VGVzdEVudmlyb25tZW50KEJyb3dzZXJEeW5hbWljVGVzdGluZ01vZHVsZSwgcGxhdGZvcm1Ccm93c2VyRHluYW1pY1Rlc3RpbmcoKSk7XG4gIH0pO1xuXG4gIGJlZm9yZUVhY2goXG4gICAgd2FpdEZvckFzeW5jKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGltcG9ydHM6IFtNYXRQYWdpbmF0b3JNb2R1bGUsIE5vb3BBbmltYXRpb25zTW9kdWxlXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbUGFnaW5hdG9ySGFybmVzc0V4YW1wbGVdXG4gICAgICB9KS5jb21waWxlQ29tcG9uZW50cygpO1xuICAgICAgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KFBhZ2luYXRvckhhcm5lc3NFeGFtcGxlKTtcbiAgICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgbG9hZGVyID0gVGVzdGJlZEhhcm5lc3NFbnZpcm9ubWVudC5sb2FkZXIoZml4dHVyZSk7XG4gICAgICBpbnN0YW5jZSA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgfSlcbiAgKTtcblxuICBpdCgnc2hvdWxkIGxvYWQgYWxsIHBhZ2luYXRvciBoYXJuZXNzZXMnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcGFnaW5hdG9ycyA9IGF3YWl0IGxvYWRlci5nZXRBbGxIYXJuZXNzZXMoTWF0UGFnaW5hdG9ySGFybmVzcyk7XG4gICAgZXhwZWN0KHBhZ2luYXRvcnMubGVuZ3RoKS50b0JlKDEpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gbmF2aWdhdGUgYmV0d2VlbiBwYWdlcycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYWdpbmF0b3IgPSBhd2FpdCBsb2FkZXIuZ2V0SGFybmVzcyhNYXRQYWdpbmF0b3JIYXJuZXNzKTtcblxuICAgIGV4cGVjdChpbnN0YW5jZS5wYWdlSW5kZXgpLnRvQmUoMCk7XG4gICAgYXdhaXQgcGFnaW5hdG9yLmdvVG9OZXh0UGFnZSgpO1xuICAgIGV4cGVjdChpbnN0YW5jZS5wYWdlSW5kZXgpLnRvQmUoMSk7XG4gICAgYXdhaXQgcGFnaW5hdG9yLmdvVG9QcmV2aW91c1BhZ2UoKTtcbiAgICBleHBlY3QoaW5zdGFuY2UucGFnZUluZGV4KS50b0JlKDApO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gZ28gdG8gdGhlIGxhc3QgcGFnZScsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYWdpbmF0b3IgPSBhd2FpdCBsb2FkZXIuZ2V0SGFybmVzcyhNYXRQYWdpbmF0b3JIYXJuZXNzKTtcblxuICAgIGV4cGVjdChpbnN0YW5jZS5wYWdlSW5kZXgpLnRvQmUoMCk7XG4gICAgYXdhaXQgcGFnaW5hdG9yLmdvVG9MYXN0UGFnZSgpO1xuICAgIGV4cGVjdChpbnN0YW5jZS5wYWdlSW5kZXgpLnRvQmUoNDkpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gc2V0IHRoZSBwYWdlIHNpemUnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcGFnaW5hdG9yID0gYXdhaXQgbG9hZGVyLmdldEhhcm5lc3MoTWF0UGFnaW5hdG9ySGFybmVzcyk7XG5cbiAgICBleHBlY3QoaW5zdGFuY2UucGFnZVNpemUpLnRvQmUoMTApO1xuICAgIGF3YWl0IHBhZ2luYXRvci5zZXRQYWdlU2l6ZSgyNSk7XG4gICAgZXhwZWN0KGluc3RhbmNlLnBhZ2VTaXplKS50b0JlKDI1KTtcbiAgfSk7XG59KTtcbiJdfQ==
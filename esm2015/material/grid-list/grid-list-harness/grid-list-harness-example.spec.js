import { __awaiter } from "tslib";
import { TestBed, waitForAsync } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatGridListHarness, MatGridTileHarness } from '@angular/material/grid-list/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridListHarnessExample } from './grid-list-harness-example';
describe('GridListHarnessExample', () => {
    let fixture;
    let loader;
    beforeAll(() => {
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [MatGridListModule],
            declarations: [GridListHarnessExample]
        }).compileComponents();
        fixture = TestBed.createComponent(GridListHarnessExample);
        fixture.detectChanges();
        loader = TestbedHarnessEnvironment.loader(fixture);
    }));
    it('should be able to load grid-list harnesses', () => __awaiter(void 0, void 0, void 0, function* () {
        const harnesses = yield loader.getAllHarnesses(MatGridListHarness);
        expect(harnesses.length).toBe(1);
    }));
    it('should be able to load grid-tile harnesses', () => __awaiter(void 0, void 0, void 0, function* () {
        const harnesses = yield loader.getAllHarnesses(MatGridTileHarness);
        expect(harnesses.length).toBe(4);
    }));
    it('should be able to get tiles of grid-list with filters', () => __awaiter(void 0, void 0, void 0, function* () {
        const gridList = yield loader.getHarness(MatGridListHarness);
        const tiles = yield gridList.getTiles({ headerText: /Tile [34]/ });
        expect(tiles.length).toBe(2);
    }));
    it('should be able to check whether tile has header', () => __awaiter(void 0, void 0, void 0, function* () {
        const tiles = yield loader.getAllHarnesses(MatGridTileHarness);
        expect(yield tiles[0].hasHeader()).toBe(false);
        expect(yield (yield tiles[0].host()).text()).toBe('Tile 1 (no header, no footer)');
    }));
    it('should be able to check whether tile has footer', () => __awaiter(void 0, void 0, void 0, function* () {
        const tiles = yield loader.getAllHarnesses(MatGridTileHarness);
        expect(yield tiles[2].hasFooter()).toBe(true);
        expect(yield tiles[2].getFooterText()).toBe('Tile 3 footer');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LWhhcm5lc3MtZXhhbXBsZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtbGlzdC1oYXJuZXNzL2dyaWQtbGlzdC1oYXJuZXNzLWV4YW1wbGUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLE9BQU8sRUFBb0IsWUFBWSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDOUUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFDLGtCQUFrQixFQUFFLGtCQUFrQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFFM0YsT0FBTyxFQUFDLDJCQUEyQixFQUFFLDZCQUE2QixFQUFDLE1BQzVELDJDQUEyQyxDQUFDO0FBQ25ELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBRW5FLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEVBQUU7SUFDdEMsSUFBSSxPQUFpRCxDQUFDO0lBQ3RELElBQUksTUFBcUIsQ0FBQztJQUUxQixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsT0FBTyxDQUFDLG1CQUFtQixDQUFDLDJCQUEyQixFQUFFLDZCQUE2QixFQUFFLENBQUMsQ0FBQztJQUM1RixDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FDUixZQUFZLENBQUMsR0FBRyxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztZQUM1QixZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN2QyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN2QixPQUFPLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QixNQUFNLEdBQUcseUJBQXlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQyxDQUNILENBQUM7SUFFRixFQUFFLENBQUMsNENBQTRDLEVBQUUsR0FBUyxFQUFFO1FBQzFELE1BQU0sU0FBUyxHQUFHLE1BQU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNENBQTRDLEVBQUUsR0FBUyxFQUFFO1FBQzFELE1BQU0sU0FBUyxHQUFHLE1BQU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsdURBQXVELEVBQUUsR0FBUyxFQUFFO1FBQ3JFLE1BQU0sUUFBUSxHQUFHLE1BQU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzdELE1BQU0sS0FBSyxHQUFHLE1BQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaURBQWlELEVBQUUsR0FBUyxFQUFFO1FBQy9ELE1BQU0sS0FBSyxHQUFHLE1BQU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUNyRixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlEQUFpRCxFQUFFLEdBQVMsRUFBRTtRQUMvRCxNQUFNLEtBQUssR0FBRyxNQUFNLE1BQU0sQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMvRCxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGVzdEJlZCwgQ29tcG9uZW50Rml4dHVyZSwgd2FpdEZvckFzeW5jfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHtUZXN0YmVkSGFybmVzc0Vudmlyb25tZW50fSBmcm9tICdAYW5ndWxhci9jZGsvdGVzdGluZy90ZXN0YmVkJztcbmltcG9ydCB7TWF0R3JpZExpc3RIYXJuZXNzLCBNYXRHcmlkVGlsZUhhcm5lc3N9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2dyaWQtbGlzdC90ZXN0aW5nJztcbmltcG9ydCB7SGFybmVzc0xvYWRlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Rlc3RpbmcnO1xuaW1wb3J0IHtCcm93c2VyRHluYW1pY1Rlc3RpbmdNb2R1bGUsIHBsYXRmb3JtQnJvd3NlckR5bmFtaWNUZXN0aW5nfVxuICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvdGVzdGluZyc7XG5pbXBvcnQge01hdEdyaWRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ncmlkLWxpc3QnO1xuaW1wb3J0IHtHcmlkTGlzdEhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2dyaWQtbGlzdC1oYXJuZXNzLWV4YW1wbGUnO1xuXG5kZXNjcmliZSgnR3JpZExpc3RIYXJuZXNzRXhhbXBsZScsICgpID0+IHtcbiAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8R3JpZExpc3RIYXJuZXNzRXhhbXBsZT47XG4gIGxldCBsb2FkZXI6IEhhcm5lc3NMb2FkZXI7XG5cbiAgYmVmb3JlQWxsKCgpID0+IHtcbiAgICBUZXN0QmVkLmluaXRUZXN0RW52aXJvbm1lbnQoQnJvd3NlckR5bmFtaWNUZXN0aW5nTW9kdWxlLCBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljVGVzdGluZygpKTtcbiAgfSk7XG5cbiAgYmVmb3JlRWFjaChcbiAgICB3YWl0Rm9yQXN5bmMoKCkgPT4ge1xuICAgICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgaW1wb3J0czogW01hdEdyaWRMaXN0TW9kdWxlXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbR3JpZExpc3RIYXJuZXNzRXhhbXBsZV1cbiAgICAgIH0pLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gICAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoR3JpZExpc3RIYXJuZXNzRXhhbXBsZSk7XG4gICAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIGxvYWRlciA9IFRlc3RiZWRIYXJuZXNzRW52aXJvbm1lbnQubG9hZGVyKGZpeHR1cmUpO1xuICAgIH0pXG4gICk7XG5cbiAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIGxvYWQgZ3JpZC1saXN0IGhhcm5lc3NlcycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBoYXJuZXNzZXMgPSBhd2FpdCBsb2FkZXIuZ2V0QWxsSGFybmVzc2VzKE1hdEdyaWRMaXN0SGFybmVzcyk7XG4gICAgZXhwZWN0KGhhcm5lc3Nlcy5sZW5ndGgpLnRvQmUoMSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgYmUgYWJsZSB0byBsb2FkIGdyaWQtdGlsZSBoYXJuZXNzZXMnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaGFybmVzc2VzID0gYXdhaXQgbG9hZGVyLmdldEFsbEhhcm5lc3NlcyhNYXRHcmlkVGlsZUhhcm5lc3MpO1xuICAgIGV4cGVjdChoYXJuZXNzZXMubGVuZ3RoKS50b0JlKDQpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gZ2V0IHRpbGVzIG9mIGdyaWQtbGlzdCB3aXRoIGZpbHRlcnMnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZExpc3QgPSBhd2FpdCBsb2FkZXIuZ2V0SGFybmVzcyhNYXRHcmlkTGlzdEhhcm5lc3MpO1xuICAgIGNvbnN0IHRpbGVzID0gYXdhaXQgZ3JpZExpc3QuZ2V0VGlsZXMoe2hlYWRlclRleHQ6IC9UaWxlIFszNF0vfSk7XG4gICAgZXhwZWN0KHRpbGVzLmxlbmd0aCkudG9CZSgyKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIGNoZWNrIHdoZXRoZXIgdGlsZSBoYXMgaGVhZGVyJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRpbGVzID0gYXdhaXQgbG9hZGVyLmdldEFsbEhhcm5lc3NlcyhNYXRHcmlkVGlsZUhhcm5lc3MpO1xuICAgIGV4cGVjdChhd2FpdCB0aWxlc1swXS5oYXNIZWFkZXIoKSkudG9CZShmYWxzZSk7XG4gICAgZXhwZWN0KGF3YWl0IChhd2FpdCB0aWxlc1swXS5ob3N0KCkpLnRleHQoKSkudG9CZSgnVGlsZSAxIChubyBoZWFkZXIsIG5vIGZvb3RlciknKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIGNoZWNrIHdoZXRoZXIgdGlsZSBoYXMgZm9vdGVyJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRpbGVzID0gYXdhaXQgbG9hZGVyLmdldEFsbEhhcm5lc3NlcyhNYXRHcmlkVGlsZUhhcm5lc3MpO1xuICAgIGV4cGVjdChhd2FpdCB0aWxlc1syXS5oYXNGb290ZXIoKSkudG9CZSh0cnVlKTtcbiAgICBleHBlY3QoYXdhaXQgdGlsZXNbMl0uZ2V0Rm9vdGVyVGV4dCgpKS50b0JlKCdUaWxlIDMgZm9vdGVyJyk7XG4gIH0pO1xufSk7XG4iXX0=
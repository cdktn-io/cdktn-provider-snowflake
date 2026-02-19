# `resourceMonitor` Submodule <a name="`resourceMonitor` Submodule" id="@cdktn/provider-snowflake.resourceMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceMonitor <a name="ResourceMonitor" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor snowflake_resource_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer"></a>

```typescript
import { resourceMonitor } from '@cdktn/provider-snowflake'

new resourceMonitor.ResourceMonitor(scope: Construct, id: string, config: ResourceMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig">ResourceMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig">ResourceMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetCreditQuota">resetCreditQuota</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetEndTimestamp">resetEndTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyTriggers">resetNotifyTriggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyUsers">resetNotifyUsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetStartTimestamp">resetStartTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendImmediateTrigger">resetSuspendImmediateTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendTrigger">resetSuspendTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.putTimeouts"></a>

```typescript
public putTimeouts(value: ResourceMonitorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts">ResourceMonitorTimeouts</a>

---

##### `resetCreditQuota` <a name="resetCreditQuota" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetCreditQuota"></a>

```typescript
public resetCreditQuota(): void
```

##### `resetEndTimestamp` <a name="resetEndTimestamp" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetEndTimestamp"></a>

```typescript
public resetEndTimestamp(): void
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotifyTriggers` <a name="resetNotifyTriggers" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyTriggers"></a>

```typescript
public resetNotifyTriggers(): void
```

##### `resetNotifyUsers` <a name="resetNotifyUsers" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetNotifyUsers"></a>

```typescript
public resetNotifyUsers(): void
```

##### `resetStartTimestamp` <a name="resetStartTimestamp" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetStartTimestamp"></a>

```typescript
public resetStartTimestamp(): void
```

##### `resetSuspendImmediateTrigger` <a name="resetSuspendImmediateTrigger" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendImmediateTrigger"></a>

```typescript
public resetSuspendImmediateTrigger(): void
```

##### `resetSuspendTrigger` <a name="resetSuspendTrigger" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetSuspendTrigger"></a>

```typescript
public resetSuspendTrigger(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ResourceMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.isConstruct"></a>

```typescript
import { resourceMonitor } from '@cdktn/provider-snowflake'

resourceMonitor.ResourceMonitor.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformElement"></a>

```typescript
import { resourceMonitor } from '@cdktn/provider-snowflake'

resourceMonitor.ResourceMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformResource"></a>

```typescript
import { resourceMonitor } from '@cdktn/provider-snowflake'

resourceMonitor.ResourceMonitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport"></a>

```typescript
import { resourceMonitor } from '@cdktn/provider-snowflake'

resourceMonitor.ResourceMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ResourceMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourceMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourceMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ResourceMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList">ResourceMonitorShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference">ResourceMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuotaInput">creditQuotaInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestampInput">endTimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggersInput">notifyTriggersInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsersInput">notifyUsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestampInput">startTimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggerInput">suspendImmediateTriggerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggerInput">suspendTriggerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts">ResourceMonitorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuota">creditQuota</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestamp">endTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggers">notifyTriggers</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsers">notifyUsers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestamp">startTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTrigger">suspendImmediateTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTrigger">suspendTrigger</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.showOutput"></a>

```typescript
public readonly showOutput: ResourceMonitorShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList">ResourceMonitorShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceMonitorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference">ResourceMonitorTimeoutsOutputReference</a>

---

##### `creditQuotaInput`<sup>Optional</sup> <a name="creditQuotaInput" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuotaInput"></a>

```typescript
public readonly creditQuotaInput: number;
```

- *Type:* number

---

##### `endTimestampInput`<sup>Optional</sup> <a name="endTimestampInput" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestampInput"></a>

```typescript
public readonly endTimestampInput: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notifyTriggersInput`<sup>Optional</sup> <a name="notifyTriggersInput" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggersInput"></a>

```typescript
public readonly notifyTriggersInput: number[];
```

- *Type:* number[]

---

##### `notifyUsersInput`<sup>Optional</sup> <a name="notifyUsersInput" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsersInput"></a>

```typescript
public readonly notifyUsersInput: string[];
```

- *Type:* string[]

---

##### `startTimestampInput`<sup>Optional</sup> <a name="startTimestampInput" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestampInput"></a>

```typescript
public readonly startTimestampInput: string;
```

- *Type:* string

---

##### `suspendImmediateTriggerInput`<sup>Optional</sup> <a name="suspendImmediateTriggerInput" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTriggerInput"></a>

```typescript
public readonly suspendImmediateTriggerInput: number;
```

- *Type:* number

---

##### `suspendTriggerInput`<sup>Optional</sup> <a name="suspendTriggerInput" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTriggerInput"></a>

```typescript
public readonly suspendTriggerInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ResourceMonitorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts">ResourceMonitorTimeouts</a>

---

##### `creditQuota`<sup>Required</sup> <a name="creditQuota" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.creditQuota"></a>

```typescript
public readonly creditQuota: number;
```

- *Type:* number

---

##### `endTimestamp`<sup>Required</sup> <a name="endTimestamp" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.endTimestamp"></a>

```typescript
public readonly endTimestamp: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notifyTriggers`<sup>Required</sup> <a name="notifyTriggers" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyTriggers"></a>

```typescript
public readonly notifyTriggers: number[];
```

- *Type:* number[]

---

##### `notifyUsers`<sup>Required</sup> <a name="notifyUsers" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.notifyUsers"></a>

```typescript
public readonly notifyUsers: string[];
```

- *Type:* string[]

---

##### `startTimestamp`<sup>Required</sup> <a name="startTimestamp" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.startTimestamp"></a>

```typescript
public readonly startTimestamp: string;
```

- *Type:* string

---

##### `suspendImmediateTrigger`<sup>Required</sup> <a name="suspendImmediateTrigger" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendImmediateTrigger"></a>

```typescript
public readonly suspendImmediateTrigger: number;
```

- *Type:* number

---

##### `suspendTrigger`<sup>Required</sup> <a name="suspendTrigger" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.suspendTrigger"></a>

```typescript
public readonly suspendTrigger: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceMonitorConfig <a name="ResourceMonitorConfig" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.Initializer"></a>

```typescript
import { resourceMonitor } from '@cdktn/provider-snowflake'

const resourceMonitorConfig: resourceMonitor.ResourceMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.name">name</a></code> | <code>string</code> | Identifier for the resource monitor; |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.creditQuota">creditQuota</a></code> | <code>number</code> | The number of credits allocated to the resource monitor per frequency interval. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.endTimestamp">endTimestamp</a></code> | <code>string</code> | The date and time when the resource monitor suspends the assigned warehouses. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.frequency">frequency</a></code> | <code>string</code> | The frequency interval at which the credit usage resets to 0. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#id ResourceMonitor#id}. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyTriggers">notifyTriggers</a></code> | <code>number[]</code> | Specifies a list of percentages of the credit quota. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyUsers">notifyUsers</a></code> | <code>string[]</code> | Specifies the list of users (their identifiers) to receive email notifications on resource monitors. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.startTimestamp">startTimestamp</a></code> | <code>string</code> | The date and time when the resource monitor starts monitoring credit usage for the assigned warehouses. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendImmediateTrigger">suspendImmediateTrigger</a></code> | <code>number</code> | Represents a numeric value specified as a percentage of the credit quota. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendTrigger">suspendTrigger</a></code> | <code>number</code> | Represents a numeric value specified as a percentage of the credit quota. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts">ResourceMonitorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Identifier for the resource monitor;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#name ResourceMonitor#name}

---

##### `creditQuota`<sup>Optional</sup> <a name="creditQuota" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.creditQuota"></a>

```typescript
public readonly creditQuota: number;
```

- *Type:* number

The number of credits allocated to the resource monitor per frequency interval.

When total usage for all warehouses assigned to the monitor reaches this number for the current frequency interval, the resource monitor is considered to be at 100% of quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#credit_quota ResourceMonitor#credit_quota}

---

##### `endTimestamp`<sup>Optional</sup> <a name="endTimestamp" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.endTimestamp"></a>

```typescript
public readonly endTimestamp: string;
```

- *Type:* string

The date and time when the resource monitor suspends the assigned warehouses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#end_timestamp ResourceMonitor#end_timestamp}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

The frequency interval at which the credit usage resets to 0.

Valid values are (case-insensitive): `MONTHLY` | `DAILY` | `WEEKLY` | `YEARLY` | `NEVER`. If you set a `frequency` for a resource monitor, you must also set `start_timestamp`. If you specify `NEVER` for the frequency, the credit usage for the warehouse does not reset. After removing this field from the config, the previously set value will be preserved on the Snowflake side, not the default value. That's due to Snowflake limitation and the lack of unset functionality for this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#frequency ResourceMonitor#frequency}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#id ResourceMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notifyTriggers`<sup>Optional</sup> <a name="notifyTriggers" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyTriggers"></a>

```typescript
public readonly notifyTriggers: number[];
```

- *Type:* number[]

Specifies a list of percentages of the credit quota.

After reaching any of the values the users passed in the notify_users field will be notified (to receive the notification they should have notifications enabled). Values over 100 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#notify_triggers ResourceMonitor#notify_triggers}

---

##### `notifyUsers`<sup>Optional</sup> <a name="notifyUsers" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.notifyUsers"></a>

```typescript
public readonly notifyUsers: string[];
```

- *Type:* string[]

Specifies the list of users (their identifiers) to receive email notifications on resource monitors.

For more information about this resource, see [docs](./user).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#notify_users ResourceMonitor#notify_users}

---

##### `startTimestamp`<sup>Optional</sup> <a name="startTimestamp" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.startTimestamp"></a>

```typescript
public readonly startTimestamp: string;
```

- *Type:* string

The date and time when the resource monitor starts monitoring credit usage for the assigned warehouses.

If you set a `start_timestamp` for a resource monitor, you must also set `frequency`. If you specify the special value `IMMEDIATELY`, the current date is used. In this case, the field of this value in `show_output` may be not consistent across different Terraform runs. After removing this field from the config, the previously set value will be preserved on the Snowflake side, not the default value. That's due to Snowflake limitation and the lack of unset functionality for this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#start_timestamp ResourceMonitor#start_timestamp}

---

##### `suspendImmediateTrigger`<sup>Optional</sup> <a name="suspendImmediateTrigger" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendImmediateTrigger"></a>

```typescript
public readonly suspendImmediateTrigger: number;
```

- *Type:* number

Represents a numeric value specified as a percentage of the credit quota.

Values over 100 are supported. After reaching this value, all assigned warehouses immediately cancel any currently running queries or statements. In addition, this action sends a notification to all users who have enabled notifications for themselves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#suspend_immediate_trigger ResourceMonitor#suspend_immediate_trigger}

---

##### `suspendTrigger`<sup>Optional</sup> <a name="suspendTrigger" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.suspendTrigger"></a>

```typescript
public readonly suspendTrigger: number;
```

- *Type:* number

Represents a numeric value specified as a percentage of the credit quota.

Values over 100 are supported. After reaching this value, all assigned warehouses while allowing currently running queries to complete will be suspended. No new queries can be executed by the warehouses until the credit quota for the resource monitor is increased. In addition, this action sends a notification to all users who have enabled notifications for themselves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#suspend_trigger ResourceMonitor#suspend_trigger}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceMonitorTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts">ResourceMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#timeouts ResourceMonitor#timeouts}

---

### ResourceMonitorShowOutput <a name="ResourceMonitorShowOutput" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutput.Initializer"></a>

```typescript
import { resourceMonitor } from '@cdktn/provider-snowflake'

const resourceMonitorShowOutput: resourceMonitor.ResourceMonitorShowOutput = { ... }
```


### ResourceMonitorTimeouts <a name="ResourceMonitorTimeouts" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.Initializer"></a>

```typescript
import { resourceMonitor } from '@cdktn/provider-snowflake'

const resourceMonitorTimeouts: resourceMonitor.ResourceMonitorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#create ResourceMonitor#create}. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#delete ResourceMonitor#delete}. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#read ResourceMonitor#read}. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#update ResourceMonitor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#create ResourceMonitor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#delete ResourceMonitor#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#read ResourceMonitor#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/resource_monitor#update ResourceMonitor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceMonitorShowOutputList <a name="ResourceMonitorShowOutputList" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.Initializer"></a>

```typescript
import { resourceMonitor } from '@cdktn/provider-snowflake'

new resourceMonitor.ResourceMonitorShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.get"></a>

```typescript
public get(index: number): ResourceMonitorShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ResourceMonitorShowOutputOutputReference <a name="ResourceMonitorShowOutputOutputReference" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer"></a>

```typescript
import { resourceMonitor } from '@cdktn/provider-snowflake'

new resourceMonitor.ResourceMonitorShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.creditQuota">creditQuota</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.remainingCredits">remainingCredits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.suspendAt">suspendAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.suspendImmediateAt">suspendImmediateAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.usedCredits">usedCredits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutput">ResourceMonitorShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `creditQuota`<sup>Required</sup> <a name="creditQuota" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.creditQuota"></a>

```typescript
public readonly creditQuota: number;
```

- *Type:* number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `remainingCredits`<sup>Required</sup> <a name="remainingCredits" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.remainingCredits"></a>

```typescript
public readonly remainingCredits: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `suspendAt`<sup>Required</sup> <a name="suspendAt" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.suspendAt"></a>

```typescript
public readonly suspendAt: number;
```

- *Type:* number

---

##### `suspendImmediateAt`<sup>Required</sup> <a name="suspendImmediateAt" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.suspendImmediateAt"></a>

```typescript
public readonly suspendImmediateAt: number;
```

- *Type:* number

---

##### `usedCredits`<sup>Required</sup> <a name="usedCredits" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.usedCredits"></a>

```typescript
public readonly usedCredits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ResourceMonitorShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorShowOutput">ResourceMonitorShowOutput</a>

---


### ResourceMonitorTimeoutsOutputReference <a name="ResourceMonitorTimeoutsOutputReference" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.Initializer"></a>

```typescript
import { resourceMonitor } from '@cdktn/provider-snowflake'

new resourceMonitor.ResourceMonitorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts">ResourceMonitorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceMonitorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.resourceMonitor.ResourceMonitorTimeouts">ResourceMonitorTimeouts</a>

---




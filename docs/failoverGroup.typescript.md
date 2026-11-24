# `failoverGroup` Submodule <a name="`failoverGroup` Submodule" id="@cdktn/provider-snowflake.failoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FailoverGroup <a name="FailoverGroup" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group snowflake_failover_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer"></a>

```typescript
import { failoverGroup } from '@cdktn/provider-snowflake'

new failoverGroup.FailoverGroup(scope: Construct, id: string, config: FailoverGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig">FailoverGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig">FailoverGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases">resetAllowedDatabases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedExternalVolumes">resetAllowedExternalVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes">resetAllowedIntegrationTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares">resetAllowedShares</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetErrorIntegration">resetErrorIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck">resetIgnoreEditionCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOptimizedRefresh">resetOptimizedRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule">resetReplicationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetRpoAssurance">resetRpoAssurance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: FailoverGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

---

##### `resetAllowedDatabases` <a name="resetAllowedDatabases" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases"></a>

```typescript
public resetAllowedDatabases(): void
```

##### `resetAllowedExternalVolumes` <a name="resetAllowedExternalVolumes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedExternalVolumes"></a>

```typescript
public resetAllowedExternalVolumes(): void
```

##### `resetAllowedIntegrationTypes` <a name="resetAllowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes"></a>

```typescript
public resetAllowedIntegrationTypes(): void
```

##### `resetAllowedShares` <a name="resetAllowedShares" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares"></a>

```typescript
public resetAllowedShares(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetErrorIntegration` <a name="resetErrorIntegration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetErrorIntegration"></a>

```typescript
public resetErrorIntegration(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreEditionCheck` <a name="resetIgnoreEditionCheck" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck"></a>

```typescript
public resetIgnoreEditionCheck(): void
```

##### `resetOptimizedRefresh` <a name="resetOptimizedRefresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOptimizedRefresh"></a>

```typescript
public resetOptimizedRefresh(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetReplicationSchedule` <a name="resetReplicationSchedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule"></a>

```typescript
public resetReplicationSchedule(): void
```

##### `resetRpoAssurance` <a name="resetRpoAssurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetRpoAssurance"></a>

```typescript
public resetRpoAssurance(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FailoverGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isConstruct"></a>

```typescript
import { failoverGroup } from '@cdktn/provider-snowflake'

failoverGroup.FailoverGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement"></a>

```typescript
import { failoverGroup } from '@cdktn/provider-snowflake'

failoverGroup.FailoverGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource"></a>

```typescript
import { failoverGroup } from '@cdktn/provider-snowflake'

failoverGroup.FailoverGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport"></a>

```typescript
import { failoverGroup } from '@cdktn/provider-snowflake'

failoverGroup.FailoverGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FailoverGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FailoverGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.isPrimary">isPrimary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList">FailoverGroupShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference">FailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput">allowedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput">allowedDatabasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumesInput">allowedExternalVolumesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput">allowedIntegrationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput">allowedSharesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegrationInput">errorIntegrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput">ignoreEditionCheckInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput">objectTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefreshInput">optimizedRefreshInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput">replicationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssuranceInput">rpoAssuranceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts">allowedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases">allowedDatabases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumes">allowedExternalVolumes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes">allowedIntegrationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares">allowedShares</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegration">errorIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes">objectTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefresh">optimizedRefresh</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnly">readOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule">replicationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssurance">rpoAssurance</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.isPrimary"></a>

```typescript
public readonly isPrimary: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.showOutput"></a>

```typescript
public readonly showOutput: FailoverGroupShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList">FailoverGroupShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeouts"></a>

```typescript
public readonly timeouts: FailoverGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference">FailoverGroupTimeoutsOutputReference</a>

---

##### `allowedAccountsInput`<sup>Optional</sup> <a name="allowedAccountsInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput"></a>

```typescript
public readonly allowedAccountsInput: string[];
```

- *Type:* string[]

---

##### `allowedDatabasesInput`<sup>Optional</sup> <a name="allowedDatabasesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput"></a>

```typescript
public readonly allowedDatabasesInput: string[];
```

- *Type:* string[]

---

##### `allowedExternalVolumesInput`<sup>Optional</sup> <a name="allowedExternalVolumesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumesInput"></a>

```typescript
public readonly allowedExternalVolumesInput: string[];
```

- *Type:* string[]

---

##### `allowedIntegrationTypesInput`<sup>Optional</sup> <a name="allowedIntegrationTypesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput"></a>

```typescript
public readonly allowedIntegrationTypesInput: string[];
```

- *Type:* string[]

---

##### `allowedSharesInput`<sup>Optional</sup> <a name="allowedSharesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput"></a>

```typescript
public readonly allowedSharesInput: string[];
```

- *Type:* string[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `errorIntegrationInput`<sup>Optional</sup> <a name="errorIntegrationInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegrationInput"></a>

```typescript
public readonly errorIntegrationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreEditionCheckInput`<sup>Optional</sup> <a name="ignoreEditionCheckInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput"></a>

```typescript
public readonly ignoreEditionCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `objectTypesInput`<sup>Optional</sup> <a name="objectTypesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput"></a>

```typescript
public readonly objectTypesInput: string[];
```

- *Type:* string[]

---

##### `optimizedRefreshInput`<sup>Optional</sup> <a name="optimizedRefreshInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefreshInput"></a>

```typescript
public readonly optimizedRefreshInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `replicationScheduleInput`<sup>Optional</sup> <a name="replicationScheduleInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput"></a>

```typescript
public readonly replicationScheduleInput: string;
```

- *Type:* string

---

##### `rpoAssuranceInput`<sup>Optional</sup> <a name="rpoAssuranceInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssuranceInput"></a>

```typescript
public readonly rpoAssuranceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FailoverGroupTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

---

##### `allowedAccounts`<sup>Required</sup> <a name="allowedAccounts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts"></a>

```typescript
public readonly allowedAccounts: string[];
```

- *Type:* string[]

---

##### `allowedDatabases`<sup>Required</sup> <a name="allowedDatabases" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases"></a>

```typescript
public readonly allowedDatabases: string[];
```

- *Type:* string[]

---

##### `allowedExternalVolumes`<sup>Required</sup> <a name="allowedExternalVolumes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumes"></a>

```typescript
public readonly allowedExternalVolumes: string[];
```

- *Type:* string[]

---

##### `allowedIntegrationTypes`<sup>Required</sup> <a name="allowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes"></a>

```typescript
public readonly allowedIntegrationTypes: string[];
```

- *Type:* string[]

---

##### `allowedShares`<sup>Required</sup> <a name="allowedShares" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares"></a>

```typescript
public readonly allowedShares: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `errorIntegration`<sup>Required</sup> <a name="errorIntegration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegration"></a>

```typescript
public readonly errorIntegration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreEditionCheck`<sup>Required</sup> <a name="ignoreEditionCheck" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck"></a>

```typescript
public readonly ignoreEditionCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectTypes`<sup>Required</sup> <a name="objectTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes"></a>

```typescript
public readonly objectTypes: string[];
```

- *Type:* string[]

---

##### `optimizedRefresh`<sup>Required</sup> <a name="optimizedRefresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefresh"></a>

```typescript
public readonly optimizedRefresh: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule"></a>

```typescript
public readonly replicationSchedule: string;
```

- *Type:* string

---

##### `rpoAssurance`<sup>Required</sup> <a name="rpoAssurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssurance"></a>

```typescript
public readonly rpoAssurance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FailoverGroupConfig <a name="FailoverGroupConfig" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.Initializer"></a>

```typescript
import { failoverGroup } from '@cdktn/provider-snowflake'

const failoverGroupConfig: failoverGroup.FailoverGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts">allowedAccounts</a></code> | <code>string[]</code> | Target accounts, in the form `<organization_name>.<account_name>`, to which replication and failover is enabled. Snowflake adds the source account to every failover group, so do not list it. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the failover group; |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes">objectTypes</a></code> | <code>string[]</code> | Types of objects for which replication and failover from the source account to the target accounts is enabled. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases">allowedDatabases</a></code> | <code>string[]</code> | Databases enabled for replication and failover. OBJECT_TYPES must include DATABASES. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedExternalVolumes">allowedExternalVolumes</a></code> | <code>string[]</code> | External volumes enabled for replication and failover. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes">allowedIntegrationTypes</a></code> | <code>string[]</code> | Integration types enabled for replication and failover. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares">allowedShares</a></code> | <code>string[]</code> | Shares enabled for replication and failover. OBJECT_TYPES must include SHARES. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.comment">comment</a></code> | <code>string</code> | Comment for the failover group. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.errorIntegration">errorIntegration</a></code> | <code>string</code> | Notification integration that receives refresh error notifications. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#id FailoverGroup#id}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | Allows replicating objects to accounts on lower editions. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.optimizedRefresh">optimizedRefresh</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the failover group uses Optimized Refresh. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.readOnly">readOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables the read-only mode of a primary failover group. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule">replicationSchedule</a></code> | <code>string</code> | Schedule for refreshing secondary failover groups. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.rpoAssurance">rpoAssurance</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the failover group uses RPO Assurance. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allowedAccounts`<sup>Required</sup> <a name="allowedAccounts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts"></a>

```typescript
public readonly allowedAccounts: string[];
```

- *Type:* string[]

Target accounts, in the form `<organization_name>.<account_name>`, to which replication and failover is enabled. Snowflake adds the source account to every failover group, so do not list it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_accounts FailoverGroup#allowed_accounts}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the failover group;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#name FailoverGroup#name}

---

##### `objectTypes`<sup>Required</sup> <a name="objectTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes"></a>

```typescript
public readonly objectTypes: string[];
```

- *Type:* string[]

Types of objects for which replication and failover from the source account to the target accounts is enabled.

Valid values are (case-insensitive): `ACCOUNT PARAMETERS` | `DATABASES` | `EXTERNAL VOLUMES` | `INTEGRATIONS` | `LISTINGS` | `NETWORK POLICIES` | `PROFILES` | `RESOURCE MONITORS` | `ROLES` | `SHARES` | `USERS` | `WAREHOUSES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#object_types FailoverGroup#object_types}

---

##### `allowedDatabases`<sup>Optional</sup> <a name="allowedDatabases" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases"></a>

```typescript
public readonly allowedDatabases: string[];
```

- *Type:* string[]

Databases enabled for replication and failover. OBJECT_TYPES must include DATABASES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_databases FailoverGroup#allowed_databases}

---

##### `allowedExternalVolumes`<sup>Optional</sup> <a name="allowedExternalVolumes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedExternalVolumes"></a>

```typescript
public readonly allowedExternalVolumes: string[];
```

- *Type:* string[]

External volumes enabled for replication and failover.

OBJECT_TYPES must include EXTERNAL VOLUMES. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_external_volumes FailoverGroup#allowed_external_volumes}

---

##### `allowedIntegrationTypes`<sup>Optional</sup> <a name="allowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes"></a>

```typescript
public readonly allowedIntegrationTypes: string[];
```

- *Type:* string[]

Integration types enabled for replication and failover.

OBJECT_TYPES must include INTEGRATIONS. SECURITY INTEGRATIONS also requires ROLES. Valid values are (case-insensitive): `SECURITY INTEGRATIONS` | `API INTEGRATIONS` | `STORAGE INTEGRATIONS` | `EXTERNAL ACCESS INTEGRATIONS` | `NOTIFICATION INTEGRATIONS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_integration_types FailoverGroup#allowed_integration_types}

---

##### `allowedShares`<sup>Optional</sup> <a name="allowedShares" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares"></a>

```typescript
public readonly allowedShares: string[];
```

- *Type:* string[]

Shares enabled for replication and failover. OBJECT_TYPES must include SHARES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_shares FailoverGroup#allowed_shares}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Comment for the failover group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#comment FailoverGroup#comment}

---

##### `errorIntegration`<sup>Optional</sup> <a name="errorIntegration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.errorIntegration"></a>

```typescript
public readonly errorIntegration: string;
```

- *Type:* string

Notification integration that receives refresh error notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#error_integration FailoverGroup#error_integration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#id FailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreEditionCheck`<sup>Optional</sup> <a name="ignoreEditionCheck" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck"></a>

```typescript
public readonly ignoreEditionCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Allows replicating objects to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#ignore_edition_check FailoverGroup#ignore_edition_check}

---

##### `optimizedRefresh`<sup>Optional</sup> <a name="optimizedRefresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.optimizedRefresh"></a>

```typescript
public readonly optimizedRefresh: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the failover group uses Optimized Refresh.

Set on the primary failover group only. When true, a `replication_schedule` with an interval of 6 hours or less is required (Snowflake recommends `10 MINUTE` or less). Cannot be set together with `rpo_assurance`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#optimized_refresh FailoverGroup#optimized_refresh}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables the read-only mode of a primary failover group.

Snowflake rejects changes to `object_types`, `allowed_databases`, `allowed_external_volumes`, `allowed_shares` and `allowed_integration_types` in this mode, so set it to false (or remove it) before changing them. With the `FAILOVER_GROUP_READ_ONLY_AUTO_SWITCH` experiment listed in [`experimental_features_enabled`](../#experimental_features_enabled-1) in the provider block, the provider leaves the read-only mode and enters it again around these changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read_only FailoverGroup#read_only}

---

##### `replicationSchedule`<sup>Optional</sup> <a name="replicationSchedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule"></a>

```typescript
public readonly replicationSchedule: string;
```

- *Type:* string

Schedule for refreshing secondary failover groups.

An interval (`<num> MINUTE`) or `USING CRON <expr> <time_zone>`. Remove the attribute to unset the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#replication_schedule FailoverGroup#replication_schedule}

---

##### `rpoAssurance`<sup>Optional</sup> <a name="rpoAssurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.rpoAssurance"></a>

```typescript
public readonly rpoAssurance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the failover group uses RPO Assurance.

Set on the primary failover group only. Needs no replication schedule, enables Optimized Refresh automatically, and cannot be set together with `optimized_refresh`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#rpo_assurance FailoverGroup#rpo_assurance}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FailoverGroupTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#timeouts FailoverGroup#timeouts}

---

### FailoverGroupShowOutput <a name="FailoverGroupShowOutput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput.Initializer"></a>

```typescript
import { failoverGroup } from '@cdktn/provider-snowflake'

const failoverGroupShowOutput: failoverGroup.FailoverGroupShowOutput = { ... }
```


### FailoverGroupTimeouts <a name="FailoverGroupTimeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.Initializer"></a>

```typescript
import { failoverGroup } from '@cdktn/provider-snowflake'

const failoverGroupTimeouts: failoverGroup.FailoverGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#create FailoverGroup#create}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#delete FailoverGroup#delete}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read FailoverGroup#read}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#update FailoverGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#create FailoverGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#delete FailoverGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read FailoverGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#update FailoverGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FailoverGroupShowOutputList <a name="FailoverGroupShowOutputList" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer"></a>

```typescript
import { failoverGroup } from '@cdktn/provider-snowflake'

new failoverGroup.FailoverGroupShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.get"></a>

```typescript
public get(index: number): FailoverGroupShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FailoverGroupShowOutputOutputReference <a name="FailoverGroupShowOutputOutputReference" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer"></a>

```typescript
import { failoverGroup } from '@cdktn/provider-snowflake'

new failoverGroup.FailoverGroupShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountLocator">accountLocator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedAccounts">allowedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedIntegrationTypes">allowedIntegrationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.errorIntegration">errorIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isListingAutoFulfillmentGroup">isListingAutoFulfillmentGroup</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isOptimizedRefreshEnabled">isOptimizedRefreshEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimary">isPrimary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimaryReadOnly">isPrimaryReadOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.nextScheduledRefresh">nextScheduledRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.objectTypes">objectTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.primary">primary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.regionGroup">regionGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.replicationSchedule">replicationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.rpoAssurance">rpoAssurance</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.secondaryState">secondaryState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.snowflakeRegion">snowflakeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput">FailoverGroupShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountLocator`<sup>Required</sup> <a name="accountLocator" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountLocator"></a>

```typescript
public readonly accountLocator: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `allowedAccounts`<sup>Required</sup> <a name="allowedAccounts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedAccounts"></a>

```typescript
public readonly allowedAccounts: string[];
```

- *Type:* string[]

---

##### `allowedIntegrationTypes`<sup>Required</sup> <a name="allowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedIntegrationTypes"></a>

```typescript
public readonly allowedIntegrationTypes: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `errorIntegration`<sup>Required</sup> <a name="errorIntegration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.errorIntegration"></a>

```typescript
public readonly errorIntegration: string;
```

- *Type:* string

---

##### `isListingAutoFulfillmentGroup`<sup>Required</sup> <a name="isListingAutoFulfillmentGroup" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isListingAutoFulfillmentGroup"></a>

```typescript
public readonly isListingAutoFulfillmentGroup: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isOptimizedRefreshEnabled`<sup>Required</sup> <a name="isOptimizedRefreshEnabled" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isOptimizedRefreshEnabled"></a>

```typescript
public readonly isOptimizedRefreshEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimary"></a>

```typescript
public readonly isPrimary: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isPrimaryReadOnly`<sup>Required</sup> <a name="isPrimaryReadOnly" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimaryReadOnly"></a>

```typescript
public readonly isPrimaryReadOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nextScheduledRefresh`<sup>Required</sup> <a name="nextScheduledRefresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.nextScheduledRefresh"></a>

```typescript
public readonly nextScheduledRefresh: string;
```

- *Type:* string

---

##### `objectTypes`<sup>Required</sup> <a name="objectTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.objectTypes"></a>

```typescript
public readonly objectTypes: string[];
```

- *Type:* string[]

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.primary"></a>

```typescript
public readonly primary: string;
```

- *Type:* string

---

##### `regionGroup`<sup>Required</sup> <a name="regionGroup" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.regionGroup"></a>

```typescript
public readonly regionGroup: string;
```

- *Type:* string

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.replicationSchedule"></a>

```typescript
public readonly replicationSchedule: string;
```

- *Type:* string

---

##### `rpoAssurance`<sup>Required</sup> <a name="rpoAssurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.rpoAssurance"></a>

```typescript
public readonly rpoAssurance: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `secondaryState`<sup>Required</sup> <a name="secondaryState" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.secondaryState"></a>

```typescript
public readonly secondaryState: string;
```

- *Type:* string

---

##### `snowflakeRegion`<sup>Required</sup> <a name="snowflakeRegion" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.snowflakeRegion"></a>

```typescript
public readonly snowflakeRegion: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FailoverGroupShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput">FailoverGroupShowOutput</a>

---


### FailoverGroupTimeoutsOutputReference <a name="FailoverGroupTimeoutsOutputReference" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { failoverGroup } from '@cdktn/provider-snowflake'

new failoverGroup.FailoverGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FailoverGroupTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

---




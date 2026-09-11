# `openflowDeploymentByoc` Submodule <a name="`openflowDeploymentByoc` Submodule" id="@cdktn/provider-snowflake.openflowDeploymentByoc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenflowDeploymentByoc <a name="OpenflowDeploymentByoc" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc snowflake_openflow_deployment_byoc}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

new openflowDeploymentByoc.OpenflowDeploymentByoc(scope: Construct, id: string, config: OpenflowDeploymentByocConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig">OpenflowDeploymentByocConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig">OpenflowDeploymentByocConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetCustomIngressHostname">resetCustomIngressHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetEventTable">resetEventTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetUsePrivateLink">resetUsePrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetUseUserAuthOverPrivatelink">resetUseUserAuthOverPrivatelink</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.putTimeouts"></a>

```typescript
public putTimeouts(value: OpenflowDeploymentByocTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCustomIngressHostname` <a name="resetCustomIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetCustomIngressHostname"></a>

```typescript
public resetCustomIngressHostname(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEventTable` <a name="resetEventTable" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetEventTable"></a>

```typescript
public resetEventTable(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUsePrivateLink` <a name="resetUsePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetUsePrivateLink"></a>

```typescript
public resetUsePrivateLink(): void
```

##### `resetUseUserAuthOverPrivatelink` <a name="resetUseUserAuthOverPrivatelink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetUseUserAuthOverPrivatelink"></a>

```typescript
public resetUseUserAuthOverPrivatelink(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpenflowDeploymentByoc resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isConstruct"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

openflowDeploymentByoc.OpenflowDeploymentByoc.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformElement"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformResource"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OpenflowDeploymentByoc resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpenflowDeploymentByoc to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpenflowDeploymentByoc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpenflowDeploymentByoc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList">OpenflowDeploymentByocDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList">OpenflowDeploymentByocParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList">OpenflowDeploymentByocShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference">OpenflowDeploymentByocTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.customIngressHostnameInput">customIngressHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.eventTableInput">eventTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.usePrivateLinkInput">usePrivateLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.useUserAuthOverPrivatelinkInput">useUserAuthOverPrivatelinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.vpcTypeInput">vpcTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.customIngressHostname">customIngressHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.eventTable">eventTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.usePrivateLink">usePrivateLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.useUserAuthOverPrivatelink">useUserAuthOverPrivatelink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.vpcType">vpcType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.describeOutput"></a>

```typescript
public readonly describeOutput: OpenflowDeploymentByocDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList">OpenflowDeploymentByocDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.parameters"></a>

```typescript
public readonly parameters: OpenflowDeploymentByocParametersList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList">OpenflowDeploymentByocParametersList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.showOutput"></a>

```typescript
public readonly showOutput: OpenflowDeploymentByocShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList">OpenflowDeploymentByocShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.timeouts"></a>

```typescript
public readonly timeouts: OpenflowDeploymentByocTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference">OpenflowDeploymentByocTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `customIngressHostnameInput`<sup>Optional</sup> <a name="customIngressHostnameInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.customIngressHostnameInput"></a>

```typescript
public readonly customIngressHostnameInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `eventTableInput`<sup>Optional</sup> <a name="eventTableInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.eventTableInput"></a>

```typescript
public readonly eventTableInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OpenflowDeploymentByocTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a>

---

##### `usePrivateLinkInput`<sup>Optional</sup> <a name="usePrivateLinkInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.usePrivateLinkInput"></a>

```typescript
public readonly usePrivateLinkInput: string;
```

- *Type:* string

---

##### `useUserAuthOverPrivatelinkInput`<sup>Optional</sup> <a name="useUserAuthOverPrivatelinkInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.useUserAuthOverPrivatelinkInput"></a>

```typescript
public readonly useUserAuthOverPrivatelinkInput: string;
```

- *Type:* string

---

##### `vpcTypeInput`<sup>Optional</sup> <a name="vpcTypeInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.vpcTypeInput"></a>

```typescript
public readonly vpcTypeInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `customIngressHostname`<sup>Required</sup> <a name="customIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.customIngressHostname"></a>

```typescript
public readonly customIngressHostname: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `eventTable`<sup>Required</sup> <a name="eventTable" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.eventTable"></a>

```typescript
public readonly eventTable: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `usePrivateLink`<sup>Required</sup> <a name="usePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.usePrivateLink"></a>

```typescript
public readonly usePrivateLink: string;
```

- *Type:* string

---

##### `useUserAuthOverPrivatelink`<sup>Required</sup> <a name="useUserAuthOverPrivatelink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.useUserAuthOverPrivatelink"></a>

```typescript
public readonly useUserAuthOverPrivatelink: string;
```

- *Type:* string

---

##### `vpcType`<sup>Required</sup> <a name="vpcType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.vpcType"></a>

```typescript
public readonly vpcType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpenflowDeploymentByocConfig <a name="OpenflowDeploymentByocConfig" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.Initializer"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

const openflowDeploymentByocConfig: openflowDeploymentByoc.OpenflowDeploymentByocConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the Openflow deployment; |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.vpcType">vpcType</a></code> | <code>string</code> | Specifies whether the deployment's VPC is created by Snowflake or supplied by you. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the Openflow deployment. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.customIngressHostname">customIngressHostname</a></code> | <code>string</code> | Specifies a custom hostname for ingress into the deployment. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.displayName">displayName</a></code> | <code>string</code> | A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.eventTable">eventTable</a></code> | <code>string</code> | Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table). |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#id OpenflowDeploymentByoc#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.usePrivateLink">usePrivateLink</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the deployment is reached over private link. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.useUserAuthOverPrivatelink">useUserAuthOverPrivatelink</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether user authentication is performed over private link. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the Openflow deployment;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#name OpenflowDeploymentByoc#name}

---

##### `vpcType`<sup>Required</sup> <a name="vpcType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.vpcType"></a>

```typescript
public readonly vpcType: string;
```

- *Type:* string

Specifies whether the deployment's VPC is created by Snowflake or supplied by you.

Valid values are (case-insensitive): `MANAGED` | `PROVIDED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#vpc_type OpenflowDeploymentByoc#vpc_type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the Openflow deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#comment OpenflowDeploymentByoc#comment}

---

##### `customIngressHostname`<sup>Optional</sup> <a name="customIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.customIngressHostname"></a>

```typescript
public readonly customIngressHostname: string;
```

- *Type:* string

Specifies a custom hostname for ingress into the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#custom_ingress_hostname OpenflowDeploymentByoc#custom_ingress_hostname}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#display_name OpenflowDeploymentByoc#display_name}

---

##### `eventTable`<sup>Optional</sup> <a name="eventTable" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.eventTable"></a>

```typescript
public readonly eventTable: string;
```

- *Type:* string

Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#event_table OpenflowDeploymentByoc#event_table}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#id OpenflowDeploymentByoc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OpenflowDeploymentByocTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#timeouts OpenflowDeploymentByoc#timeouts}

---

##### `usePrivateLink`<sup>Optional</sup> <a name="usePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.usePrivateLink"></a>

```typescript
public readonly usePrivateLink: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the deployment is reached over private link.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#use_private_link OpenflowDeploymentByoc#use_private_link}

---

##### `useUserAuthOverPrivatelink`<sup>Optional</sup> <a name="useUserAuthOverPrivatelink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.useUserAuthOverPrivatelink"></a>

```typescript
public readonly useUserAuthOverPrivatelink: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether user authentication is performed over private link.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#use_user_auth_over_privatelink OpenflowDeploymentByoc#use_user_auth_over_privatelink}

---

### OpenflowDeploymentByocDescribeOutput <a name="OpenflowDeploymentByocDescribeOutput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput.Initializer"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

const openflowDeploymentByocDescribeOutput: openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput = { ... }
```


### OpenflowDeploymentByocParameters <a name="OpenflowDeploymentByocParameters" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParameters.Initializer"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

const openflowDeploymentByocParameters: openflowDeploymentByoc.OpenflowDeploymentByocParameters = { ... }
```


### OpenflowDeploymentByocParametersEventTable <a name="OpenflowDeploymentByocParametersEventTable" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable.Initializer"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

const openflowDeploymentByocParametersEventTable: openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable = { ... }
```


### OpenflowDeploymentByocShowOutput <a name="OpenflowDeploymentByocShowOutput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutput.Initializer"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

const openflowDeploymentByocShowOutput: openflowDeploymentByoc.OpenflowDeploymentByocShowOutput = { ... }
```


### OpenflowDeploymentByocTimeouts <a name="OpenflowDeploymentByocTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.Initializer"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

const openflowDeploymentByocTimeouts: openflowDeploymentByoc.OpenflowDeploymentByocTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#create OpenflowDeploymentByoc#create}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#delete OpenflowDeploymentByoc#delete}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#read OpenflowDeploymentByoc#read}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#update OpenflowDeploymentByoc#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#create OpenflowDeploymentByoc#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#delete OpenflowDeploymentByoc#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#read OpenflowDeploymentByoc#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#update OpenflowDeploymentByoc#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpenflowDeploymentByocDescribeOutputList <a name="OpenflowDeploymentByocDescribeOutputList" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

new openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.get"></a>

```typescript
public get(index: number): OpenflowDeploymentByocDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OpenflowDeploymentByocDescribeOutputOutputReference <a name="OpenflowDeploymentByocDescribeOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

new openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.customIngressHostname">customIngressHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.usePrivateLink">usePrivateLink</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.useUserAuthOverPrivateLink">useUserAuthOverPrivateLink</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.vpcType">vpcType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput">OpenflowDeploymentByocDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `customIngressHostname`<sup>Required</sup> <a name="customIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.customIngressHostname"></a>

```typescript
public readonly customIngressHostname: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `usePrivateLink`<sup>Required</sup> <a name="usePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.usePrivateLink"></a>

```typescript
public readonly usePrivateLink: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `useUserAuthOverPrivateLink`<sup>Required</sup> <a name="useUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```typescript
public readonly useUserAuthOverPrivateLink: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `vpcType`<sup>Required</sup> <a name="vpcType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.vpcType"></a>

```typescript
public readonly vpcType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpenflowDeploymentByocDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput">OpenflowDeploymentByocDescribeOutput</a>

---


### OpenflowDeploymentByocParametersEventTableList <a name="OpenflowDeploymentByocParametersEventTableList" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

new openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.get"></a>

```typescript
public get(index: number): OpenflowDeploymentByocParametersEventTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OpenflowDeploymentByocParametersEventTableOutputReference <a name="OpenflowDeploymentByocParametersEventTableOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

new openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable">OpenflowDeploymentByocParametersEventTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpenflowDeploymentByocParametersEventTable;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable">OpenflowDeploymentByocParametersEventTable</a>

---


### OpenflowDeploymentByocParametersList <a name="OpenflowDeploymentByocParametersList" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

new openflowDeploymentByoc.OpenflowDeploymentByocParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.get"></a>

```typescript
public get(index: number): OpenflowDeploymentByocParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OpenflowDeploymentByocParametersOutputReference <a name="OpenflowDeploymentByocParametersOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

new openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.eventTable">eventTable</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList">OpenflowDeploymentByocParametersEventTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParameters">OpenflowDeploymentByocParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventTable`<sup>Required</sup> <a name="eventTable" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.eventTable"></a>

```typescript
public readonly eventTable: OpenflowDeploymentByocParametersEventTableList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList">OpenflowDeploymentByocParametersEventTableList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpenflowDeploymentByocParameters;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParameters">OpenflowDeploymentByocParameters</a>

---


### OpenflowDeploymentByocShowOutputList <a name="OpenflowDeploymentByocShowOutputList" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

new openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.get"></a>

```typescript
public get(index: number): OpenflowDeploymentByocShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OpenflowDeploymentByocShowOutputOutputReference <a name="OpenflowDeploymentByocShowOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

new openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.customIngressHostname">customIngressHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.usePrivateLink">usePrivateLink</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.useUserAuthOverPrivateLink">useUserAuthOverPrivateLink</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.vpcType">vpcType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutput">OpenflowDeploymentByocShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `customIngressHostname`<sup>Required</sup> <a name="customIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.customIngressHostname"></a>

```typescript
public readonly customIngressHostname: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.updatedOn"></a>

```typescript
public readonly updatedOn: string;
```

- *Type:* string

---

##### `usePrivateLink`<sup>Required</sup> <a name="usePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.usePrivateLink"></a>

```typescript
public readonly usePrivateLink: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `useUserAuthOverPrivateLink`<sup>Required</sup> <a name="useUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```typescript
public readonly useUserAuthOverPrivateLink: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `vpcType`<sup>Required</sup> <a name="vpcType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.vpcType"></a>

```typescript
public readonly vpcType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpenflowDeploymentByocShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutput">OpenflowDeploymentByocShowOutput</a>

---


### OpenflowDeploymentByocTimeoutsOutputReference <a name="OpenflowDeploymentByocTimeoutsOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer"></a>

```typescript
import { openflowDeploymentByoc } from '@cdktn/provider-snowflake'

new openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpenflowDeploymentByocTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a>

---



